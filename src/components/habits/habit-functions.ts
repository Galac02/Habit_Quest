export function estimateEndDate(
  periodType: string,
  timesPerPeriod: number,
): Date {
  var endDateVar = new Date();

  switch (periodType) {
    case "day": {
      endDateVar.setDate(endDateVar.getDate() + timesPerPeriod);
      break;
    }
    case "week": {
      endDateVar.setDate(endDateVar.getDate() + timesPerPeriod);
      break;
    }
    case "month": {
      endDateVar.setDate(endDateVar.getDate() + timesPerPeriod);
      break;
    }
    default: {
      alert("Something went wrong with endDateVar...");
    }
  }

  return endDateVar;
}
