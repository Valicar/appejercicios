// Obtener elementos del formulario
const userForm = document.getElementById('user-form');
const exerciseList = document.getElementById('exercise-list');
const generateLink = document.getElementById('generate-link');

// Event listener para enviar el formulario
userForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar el envío del formulario
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const weight = document.getElementById('weight').value;

    if (name !== '' && age !== '' && weight !== '') {
        // Mostrar rutinas y enlace para generar la rutina
        exerciseList.style.display = 'block';
        generateLink.style.display = 'block';

        // Ocultar formulario
        userForm.style.display = 'none';
    }
});

// Rutinas de ejercicios
const exercises = [
    { name: 'Sentadillas', image: 'images/sentadillas.jpg' },
    { name: 'Flexiones de brazos', image: 'images/flexiones.jpg' },
    { name: 'Plancha', image: 'images/plancha.png' },
    { name: 'Zancadas', image: 'images/zancadas.png' },
    { name: 'Burpees', image: 'images/burpees.jpg' },
    { name: 'Abdominales', image: 'images/abdominales.jpg' },
    { name: 'Saltos de tijera', image: 'images/saltos.jpg' },
    { name: 'Escaladores', image: 'images/escaladores.jpg' },
    { name: 'Elevaciones de pantorrillas', image: 'images/pantorrillas.png' },
    { name: 'Mountain climbers', image: 'images/mountains.jpg' },
    { name: 'Skipping', image: 'images/skipping.png' },
    { name: 'Jumping Jacks', image: 'images/jumpingjacks.jpg' },
    { name: 'Step-Ups', image: 'images/stepups.png' },
    { name: 'Plank Jacks', image: 'images/plankjacks.jpg' },
    { name: 'Russian Twists', image: 'images/russiantwists.png' },
    { name: 'Leg Raises', image: 'images/legraises.jpg' }
];

// Función para generar una rutina aleatoria
function generateRoutine() {
    exerciseList.innerHTML = ''; // Limpiar rutinas anteriores

    for (let i = 0; i < 5; i++) {
        const randomExercise = exercises[Math.floor(Math.random() * exercises.length)];
        const exerciseItem = document.createElement('div');
        exerciseItem.className = 'exercise-item';

        const exerciseImage = document.createElement('img');
        exerciseImage.className = 'exercise-image';
        exerciseImage.src = randomExercise.image;
        exerciseImage.alt = randomExercise.name;

        const exerciseDetails = document.createElement('div');
        exerciseDetails.className = 'exercise-details';

        const exerciseName = document.createElement('span');
        exerciseName.className = 'exercise-name';
        exerciseName.innerText = randomExercise.name;

        const exerciseReps = document.createElement('span');
        exerciseReps.className = 'exercise-reps';
        exerciseReps.innerText = `Repeticiones: ${getRandomReps()}`;

        exerciseDetails.appendChild(exerciseName);
        exerciseDetails.appendChild(exerciseReps);

        exerciseItem.appendChild(exerciseImage);
        exerciseItem.appendChild(exerciseDetails);

        exerciseList.appendChild(exerciseItem);
    }
}

// Generar un número aleatorio de repeticiones entre 5 y 15
function getRandomReps() {
    return Math.floor(Math.random() * 11) + 5;
}

// Event listener para el enlace de generar rutina
generateLink.addEventListener('click', generateRoutine);

// Generar una rutina inicial al cargar la página
generateRoutine();



