register("command", () => {
    console.assert(MathLib.map(100, 0, 200, 0, 1) === 0.5);
    console.assert(MathLib.clampFloat(1.5, 0.25, 0.5) === 0.5);
    console.assert(MathLib.clampFloat(-1.5, 0.25, 0.5) === 0.25);
    console.assert(MathLib.clampFloat(1.5, 0.5, 2.5) === 1.5);

    console.assert(MathLib.clamp(1, 0, 2) === 1);
    console.assert(MathLib.clamp(-1, 0, 2) === 0);
    console.assert(MathLib.clamp(3, 0, 2) === 2);
}).setName("mathlibtest");
