export interface CalculatorInputs {
 pointsPerShot: number;
 shootingInterval: number;
 timeInHours: number;
}

export interface CalculatorResults {
 totalPoints: number;
 pointsPerHour: number;
}

export function calculatePelPoints(inputs: CalculatorInputs): CalculatorResults {
 const { pointsPerShot, shootingInterval, timeInHours } = inputs;

 const shotsPerHour = 3600 / shootingInterval;
 const totalPoints = pointsPerShot * shotsPerHour * timeInHours;
 const pointsPerHour = pointsPerShot * shotsPerHour;

 return {
  totalPoints: Math.round(totalPoints),
  pointsPerHour: Math.round(pointsPerHour),
 };
}
