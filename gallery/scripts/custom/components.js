//a link cmponent to make aframe elements linkable in another page
AFRAME.registerComponent('simple-link', {
    schema: {
        href: { default: '' },
        target: { default: '_blank' }
    },
    init: function () {
        this.el.addEventListener('click', (e) => {
            window.open(this.data.href, this.data.target);
            console.log(this.data.href)
        });
    }
});
//sit down component
AFRAME.registerComponent('seat', {
    schema: {
        state: { type: 'string', default: '' },
        camera: { type: 'selector' },
        height: { type: 'number', default: 1 },
        duration: { type: 'number' }
    },            //using events ensures that event handlers properly clean themselves up when the entity or scene is paused, or the component is detached.
    events: {
        //activates when sitDown event is emitted on this
        click: function (evt) {
            this.startSittingDown();
        },
    },

    init: function () {
        this.directionVec3 = new THREE.Vector3();
    },
    startSittingDown: function () {
        var data = this.data;
        //sets the slider state to slidingForward
        data.state = "sittingDown";
    },
    tick: function (time, timeDelta) {
        var data = this.data;
        if (data.state == "sittingDown") {
            data.camera.removeAttribute("simple-navmesh-constraint")
            data.camera.setAttribute("wasd-controls", "acceleration: 0")
            var directionVec3 = this.directionVec3;

            // Grab position vectors (THREE.Vector3) from the entities' three.js objects.
            var targetPosition = new THREE.Vector3();
            this.el.object3D.getWorldPosition(targetPosition);
            var currentPosition = new THREE.Vector3();
            data.camera.object3D.getWorldPosition(currentPosition);
            console.log(targetPosition)

            // Subtract the vectors to get the direction the entity should head in.
            directionVec3 = new THREE.Vector3(targetPosition.x - currentPosition.x, targetPosition.y - currentPosition.y, targetPosition.z - currentPosition.z + data.height);

            // Calculate the distance.
            var distance = directionVec3.length();
            console.log(distance)

            // Don't go any closer if a close proximity has been reached.
            if (distance < 0.1) {
                data.camera.setAttribute("simple-navmesh-constraint", "navmesh:#navmesh;fall:0.5;height:1.65;");
                data.camera.setAttribute("wasd-controls", "acceleration: 20");
                data.state = "";
                return;
            }

            //timeDelta : dx = this.data.duration : distanceVector.x --> deltax = timedelta * distancevectorx / duration
            var dx = directionVec3.x * (timeDelta / 1000) / data.duration;
            var dy = directionVec3.y * (timeDelta / 1000) / data.duration;
            var dz = directionVec3.z * (timeDelta / 1000) / data.duration;
            console.log(dx)
            // Translate the entity in the direction towards the target.
            data.camera.setAttribute('position', {
                x: currentPosition.x + dx,
                y: currentPosition.y + dy,
                z: currentPosition.z + dz
            });
        }
    }
});
/* global AFRAME, THREE */

/* Constrain an object to a navmesh, for example place this element after wasd-controls like so:
`wasd-controls navmesh-physics="#navmesh-el"`
*/
AFRAME.registerComponent('simple-navmesh-constraint', {
    schema: {
        navmesh: {
            default: ''
        },
        fall: {
            default: 0.5
        },
        height: {
            default: 1.6
        }
    },

    init: function () {
        this.lastPosition = new THREE.Vector3();
        this.el.object3D.getWorldPosition(this.lastPosition);
    },

    update: function () {
        const els = Array.from(document.querySelectorAll(this.data.navmesh));
        if (els === null) {
            console.warn('navmesh-physics: Did not match any elements');
            this.objects = [];
        } else {
            this.objects = els.map(el => el.object3D);
        }
    },

    tick: (function () {
        const nextPosition = new THREE.Vector3();
        const tempVec = new THREE.Vector3();
        const scanPattern = [
            [0, 1], // Default the next location
            [30, 0.4], // A little to the side shorter range
            [-30, 0.4], // A little to the side shorter range
            [60, 0.2], // Moderately to the side short range
            [-60, 0.2], // Moderately to the side short range
            [80, 0.06], // Perpendicular very short range
            [-80, 0.06], // Perpendicular very short range
        ];
        const down = new THREE.Vector3(0, -1, 0);
        const raycaster = new THREE.Raycaster();
        const gravity = -1;
        const maxYVelocity = 0.5;
        const results = [];
        let yVel = 0;

        return function (time, delta) {
            const el = this.el;
            if (this.objects.length === 0) return;

            this.el.object3D.getWorldPosition(nextPosition);
            if (nextPosition.distanceTo(this.lastPosition) === 0) return;

            let didHit = false;

            // So that it does not get stuck it takes as few samples around the user and finds the most appropriate
            for (const [angle, distance] of scanPattern) {
                tempVec.subVectors(nextPosition, this.lastPosition);
                tempVec.applyAxisAngle(down, angle * Math.PI / 180);
                tempVec.multiplyScalar(distance);
                tempVec.add(this.lastPosition);
                tempVec.y += maxYVelocity;
                tempVec.y -= this.data.height;
                raycaster.set(tempVec, down);
                raycaster.far = this.data.fall > 0 ? this.data.fall + maxYVelocity : Infinity;
                raycaster.intersectObjects(this.objects, true, results);
                if (results.length) {
                    const hitPos = results[0].point;
                    hitPos.y += this.data.height;
                    if (nextPosition.y - (hitPos.y - yVel * 2) > 0.01) {
                        yVel += Math.max(gravity * delta * 0.001, -maxYVelocity);
                        hitPos.y = nextPosition.y + yVel;
                    } else {
                        yVel = 0;
                    }
                    el.object3D.position.copy(hitPos);
                    this.el.object3D.parent.worldToLocal(this.el.object3D.position);
                    this.lastPosition.copy(hitPos);
                    results.splice(0);
                    didHit = true;
                    break;
                }
            }

            if (!didHit) {
                this.el.object3D.position.copy(this.lastPosition);
                this.el.object3D.parent.worldToLocal(this.el.object3D.position);
            }
        }
    }())
});
