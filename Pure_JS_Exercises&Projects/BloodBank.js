function triageBlood(inventory, patients) {
  // Count inventory by type
  let bank = { O: 0, A: 0, B: 0, AB: 0 };
  for (let b of inventory) bank[b]++;

  let served = 0;

  // Helper to try serving a patient with compatible blood types
  function serve(patient, options) {
    for (let type of options) {
      if (bank[type] > 0) {
        bank[type]--;
        served++;
        return true;
      }
    }
    return false;
  }

  // Strategy: serve restrictive patients first
  for (let p of patients) {
    if (p === "O") serve(p, ["O"]);
  }
  for (let p of patients) {
    if (p === "A") serve(p, ["A", "O"]);
  }
  for (let p of patients) {
    if (p === "B") serve(p, ["B", "O"]);
  }
  for (let p of patients) {
    if (p === "AB") serve(p, ["AB", "A", "B", "O"]);
  }

  return `${served} of ${patients.length} patients served`;
}

