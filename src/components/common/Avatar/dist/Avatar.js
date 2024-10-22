"use strict";
exports.__esModule = true;
var react_1 = require("react");
var fiber_1 = require("@react-three/fiber");
var drei_1 = require("@react-three/drei");
require("./Avatar.scss");
function Avatar() {
    var _a = react_1.useState(false), hovered = _a[0], setHovered = _a[1];
    var animationRef = react_1.useRef(null);
    function Avatar3D() {
        var _a = drei_1.useGLTF("/images/marko-shaking-hands.glb"), scene = _a.scene, animations = _a.animations;
        var actions = drei_1.useAnimations(animations, scene).actions;
        react_1.useEffect(function () {
            var _a, _b;
            if (hovered) {
                animationRef.current = actions[Object.keys(actions)[0]];
                (_a = animationRef.current) === null || _a === void 0 ? void 0 : _a.play();
            }
            else {
                (_b = animationRef.current) === null || _b === void 0 ? void 0 : _b.stop();
            }
        }, [hovered, actions]);
        // Adjust the position to center the avatar properly
        return (react_1["default"].createElement("primitive", { object: scene, onPointerOver: function () { return setHovered(true); }, onPointerOut: function () { return setHovered(false); }, scale: 6, position: [0, -5.7, 0] }));
    }
    return (react_1["default"].createElement(fiber_1.Canvas, { camera: { fov: 45, position: [0, 5, 15] }, style: { width: "100%", height: "100%" } },
        react_1["default"].createElement("ambientLight", { intensity: 1 }),
        react_1["default"].createElement("directionalLight", { position: [10, 10, 5], intensity: 1 }),
        react_1["default"].createElement(react_1.Suspense, { fallback: null },
            react_1["default"].createElement(Avatar3D, null)),
        react_1["default"].createElement(drei_1.OrbitControls, null)));
}
exports["default"] = Avatar;
