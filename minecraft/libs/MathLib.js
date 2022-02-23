register("command", () => {
  const options = [
    MathLib.map(100, 0, 200, 0, 1) === 0.5,
    MathLib.clampFloat(1.5, 0.25, 0.5) === 0.5,
    MathLib.clampFloat(-1.5, 0.25, 0.5) === 0.25,
    MathLib.clampFloat(1.5, 0.5, 2.5) === 1.5,
    MathLib.clamp(1, 0, 2) === 1,
    MathLib.clamp(-1, 0, 2) === 0,
    MathLib.clamp(3, 0, 2) === 2,
  ];

  console.log(
    options.every((x) => x === true) ? "MathLib Passed" : " MathLib Failed"
  );
}).setName("mathlibtest");
