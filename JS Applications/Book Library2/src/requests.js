async function getExercises() {
  const response = await fetch(
    "https://workout-20d10-default-rtdb.firebaseio.com/.json"
  );
  return await response.json();
}

async function getExercise(id) {
  const book = await fetch(
    `https://workout-20d10-default-rtdb.firebaseio.com/${id}.json`
  );

  return await book.json();
}

async function addExercise(data) {
  const response = await fetch(
    "https://workout-20d10-default-rtdb.firebaseio.com/.json",
    {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }
  );

  const result = await response.json();
}

async function deleteExercise(id) {
  const response = await fetch(
    `https://workout-20d10-default-rtdb.firebaseio.com/${id}.json`,
    {
      method: "delete",
    }
  );

  return response.json();
}

async function editExerciseReuest(id, data) {
  try {
    const response = await fetch(
      `https://workout-20d10-default-rtdb.firebaseio.com/${id}.json/`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }
    return await response.json();
  } catch (err) {
    alert(err.message);
  }
}

export { getExercises, getExercise, addExercise, deleteExercise, editExerciseReuest};
