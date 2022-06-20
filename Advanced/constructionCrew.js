function solve(obj) {
  if (obj.dizziness) {
    obj.levelOfHydrated += obj.weight * 0.1 * obj.experience;

    obj.dizziness = false;
  }
  return obj;
}
solve({ weight: 80, experience: 1, levelOfHydrated: 0, dizziness: true });
solve({ weight: 120, experience: 20, levelOfHydrated: 200, dizziness: true });
