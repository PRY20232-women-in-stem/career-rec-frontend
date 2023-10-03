export const preTestJson = {
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "boolean",
          "name": "freeTimeActivities",
          "title": "Piensa en las actividades que te gusta hacer en tu tiempo libre. Indica si alguna de ellas está relacionada con la ciencia, la tecnología, la ingeniería o las matemáticas.",
          "isRequired": true,
          "labelTrue": "Sí"
        },
        {
          "type": "rating",
          "name": "subjectInterestMath",
          "title": "Indica qué tan interesada está en Matématicas",
          "isRequired": true
        },
        {
          "type": "rating",
          "name": "subjectInterestBioGeo",
          "title": "Indica qué tan interesada está en Biología y Geología",
          "isRequired": true
        },
        {
          "type": "rating",
          "name": "subjectInterestPhyChe",
          "title": "Indica qué tan interesada está en Física y Química",
          "isRequired": true
        }
      ],
      "title": "Interés en STEM"
    },
    {
      "name": "page2",
      "elements": [
        {
          "type": "rating",
          "name": "selfPerceptionMath",
          "title": "Indica qué tan buena eres en la materia de Matématicas",
          "isRequired": true
        },
        {
          "type": "rating",
          "name": "selfPerceptionBioGeo",
          "title": "Indica qué tan buena eres en las materias de Biología y Geología",
          "isRequired": true
        },
        {
          "type": "rating",
          "name": "selfPerceptionPhyChe",
          "title": "Indica qué tan buena eres en las materias de Física y Química",
          "isRequired": true
        }
      ],
      "title": "Autopercepción"
    },
    {
      "name": "page3",
      "elements": [
        {
          "type": "radiogroup",
          "name": "lastGradeMath",
          "title": "Indica tu nota en la última evaluación de la materia de Matemática",
          "isRequired": true,
          "searchEnabled": false,
          "choices": [
            "Entre 0 y 4",
            "Entre 5 y 8",
            "Entre 9 y 11",
            "Entre 12 y 14",
            "Entre 15 y 17",
            "Entre 18 y 20",
            "No llevo este curso"
          ],
          "allowClear": false,
        },
        {
          "type": "radiogroup",
          "name": "lastGradeBioGeo",
          "title": "Indica tu nota en la última evaluación de la materia de Biología y Geología",
          "isRequired": true,
          "searchEnabled": false,
          "choices": [
            "Entre 0 y 4",
            "Entre 5 y 8",
            "Entre 9 y 11",
            "Entre 12 y 14",
            "Entre 15 y 17",
            "Entre 18 y 20",
            "No llevo este curso"
          ],
          "allowClear": false,
        },
        {
          "type": "radiogroup",
          "name": "lastGradePhyChe",
          "title": "Indica tu nota en la última evaluación de la materia de Física y Química",
          "isRequired": true,
          "searchEnabled": false,
          "choices": [
            "Entre 0 y 4",
            "Entre 5 y 8",
            "Entre 9 y 11",
            "Entre 12 y 14",
            "Entre 15 y 17",
            "Entre 18 y 20",
            "No llevo este curso"
          ],
          "allowClear": false,
        }
      ],
      "title": "Logros en cursos STEM"
    }
  ],
  "showPrevButton": false,
  "showQuestionNumbers": "off",
  // "widthMode": "static", // Tamaño de la encuesta
  // "width": "1000px" // Tamaño de la encuesta
}