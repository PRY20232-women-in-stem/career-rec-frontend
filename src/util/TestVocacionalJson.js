export const testVocacionalJson = {
  "pages": [
    {
      "name": "page1",
      "title": "Información personal",
      "elements": [
        {
          "type": "radiogroup",
          "name": "question1",
          "title": "¿Autoriza usted el tratamiento de sus datos personales con fines académicos?",
          "isRequired": true,
          "choices": [
            {
              "value": "Acepto",
              "text": "Acepto"
            },
            {
              "value": "No acepto",
              "text": "No acepto"
            }
          ]
        },
        {
          "type": "text",
          "name": "question2",
          "title": "Fecha de nacimiento",
          "isRequired": true,
          "inputType": "date"
        },
        {
          "type": "radiogroup",
          "name": "question3",
          "title": "Género",
          "isRequired": true,
          "choices": [
            {
              "value": "Femenino",
              "text": "Femenino"
            },
            {
              "value": "Masculino",
              "text": "Masculino"
            },
            {
              "value": "Otro",
              "text": "Otro"
            }
          ]
        }
      ],
    },
    {
      "name": "page2",
      "title": "Percepción de las Matemáticas",
      "elements": [
        {
          "type": "rating",
          "name": "mathLogicAbility",
          "title": "No disfruto de los juegos que involucran lógica o matemáticas.",
          "isRequired": true,
        },
        {
          "type": "rating",
          "name": "mathDifficulty",
          "title": "Encuentro las matemáticas complicadas.",
          "isRequired": true,
        },
        {
          "type": "rating",
          "name": "mathInterest",
          "title": "Siento atracción por las matemáticas.",
          "isRequired": true,
        },
        {
          "type": "rating",
          "name": "mathChallenges",
          "title": "Me gustaría a enfrentar problemas matemáticos más complejos en el futuro.",
          "isRequired": true,
        },
        {
          "type": "rating",
          "name": "mathExamCommitment",
          "title": "Doy mi mejor esfuerzo en los exámenes de matemáticas debido a mi interés en esta área.",
          "isRequired": true,
        },
        {
          "type": "rating",
          "name": "mathPerformance",
          "title": "Tengo la capacidad de obtener calificaciones altas en matemáticas.",
          "isRequired": true,
        },
        {
          "type": "rating",
          "name": "mathParticipation",
          "title": "Pienso que mejoraré mis destrezas si me uno a un grupo de estudio, taller o tutoría enfocados en matemáticas.",
          "isRequired": true,
        },
        {
          "type": "rating",
          "name": "mathRealWorldApplication",
          "title": "Puedo emplear las matemáticas con facilidad para resolver situaciones cotidianas.",
          "isRequired": true,
        },
        {
          "type": "rating",
          "name": "mathCareerFuture",
          "title": "Deseo eventualmente participar en un empleo que involucre el uso de las matemáticas.",
          "isRequired": true,
        },
        {
          "type": "rating",
          "name": "mathCareerImportance",
          "title": "Considero que comprender las matemáticas será crucial en mi trayectoria profesional.",
          "isRequired": true,
        },
      ],
    },
    {
      "name": "page3",
      "title": "Percepción de las Ciencias",
      "elements": [
        {
          "type": "rating",
          "name": "scienceInterest",
          "title": "Disfruto realizando proyectos relacionados con la ciencia.",
          "isRequired": true,
        },
        {
          "type": "rating",
          "name": "scienceCareerPossibility",
          "title": "Podría optar por una profesión en el ámbito científico.",
          "isRequired": true,
        },
        {
          "type": "rating",
          "name": "scienceParticipation",
          "title": "He participado o participo en eventos como concursos, ferias o grupos de ciencias porque tengo aspiraciones profesionales en ese campo.",
          "isRequired": true,
        },
        {
          "type": "rating",
          "name": "scienceDislike",
          "title": "No tengo afinidad por la ciencia.",
          "isRequired": true,
        },
        {
          "type": "rating",
          "name": "scienceCareerBenefits",
          "title": "Considero que adquirir conocimientos en ciencias me abrirá oportunidades laborales prometedoras.",
          "isRequired": true,
        },
        {
          "type": "rating",
          "name": "scienceAcademicPerformance",
          "title": "Hago el esfuerzo de obtener buenas notas en los cursos de ciencias debido a mi interés en empleos relacionados con esta área.",
          "isRequired": true,
        },
        {
          "type": "rating",
          "name": "scienceDifficulty",
          "title": "Encuentro las ciencias desafiantes.",
          "isRequired": true,
        },
        {
          "type": "rating",
          "name": "scienceRealWorldApplication",
          "title": "No creo que la ciencia sea útil para resolver situaciones del día a día.",
          "isRequired": true,
        },
        {
          "type": "rating",
          "name": "scienceCareerImportance",
          "title": "Pienso que la ciencia tendrá un papel relevante en mi trayectoria profesional.",
          "isRequired": true,
        },
        {
          "type": "rating",
          "name": "scienceActivitiesParticipation",
          "title": "Estaría dispuesto(a) a unirme a talleres, clubes o tutorías en ciencias porque sé que comprenderla será fundamental en mi carrera.",
          "isRequired": true,
        },
      ],
    },
    {
      "name": "page4",
      "title": "Percepción de la Tecnología",
      "elements": [
        {
          "type": "rating",
          "name": "techBuildingRepairAbility",
          "title": "No tengo destrezas en la construcción o reparación de objetos.",
          "isRequired": true,
        },
        {
          "type": "rating",
          "name": "techStudiesChoice",
          "title": "Mediante la elección de estudios en ingeniería, tecnología o campos relacionados, podré contribuir a la mejora de objetos de uso cotidiano.",
          "isRequired": true,
        },
        {
          "type": "rating",
          "name": "techDevicesSkills",
          "title": "Utilizo aparatos tecnologícos porque entiendo que estas habilidades serán cruciales en mi trabajo futuro.",
          "isRequired": true,
        },
        {
          "type": "rating",
          "name": "techSuccessConfidence",
          "title": "Creo que puedo alcanzar éxito en campos como ingeniería, tecnología u ocupaciones afines.",
          "isRequired": true,
        },
        {
          "type": "rating",
          "name": "techInventionsLink",
          "title": "Entiendo que mis habilidades en matemáticas y ciencias me facilitaran la mejora de herramientas útiles.",
          "isRequired": true,
        },
        {
          "type": "rating",
          "name": "techProjectsApplicability",
          "title": "Los conocimientos adquiridos en proyectos prácticos, como puentes, vehículos o robots, me beneficiarán en mi empleo futuro.",
          "isRequired": true,
        },
        {
          "type": "rating",
          "name": "techCuriosity",
          "title": "Siento curiosidad por comprender cómo opera la tecnología.",
          "isRequired": true,
        },
        {
          "type": "rating",
          "name": "techCareerRelevance",
          "title": "No considero que los conocimientos en ingeniería o tecnología sean importantes para mi trayectoria profesional.",
          "isRequired": true,
        },
        {
          "type": "rating",
          "name": "techCoursesInterest",
          "title": "Me gustaría inscribirme en más cursos relacionados a ingeniería o tecnología.",
          "isRequired": true,
        },
        {
          "type": "rating",
          "name": "techProblemSolvingSkills",
          "title": "Busco involucrarme en los campos de matematicas, tecnología y ciencias para perfeccionar mis habilidades en la resolución de problemas para mi futuro trabajo.",
          "isRequired": true,
        },
      ],
    }
  ],
  "showPrevButton": false,
  "showQuestionNumbers": "off",
  // "widthMode": "static", // Tamaño de la encuesta
  // "width": "1000px" // Tamaño de la encuesta
}