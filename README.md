# Elite

Aplicación de desarrollo personal para hombres que quieren construir disciplina, fortaleza mental y resultados medibles en las áreas más importantes de su vida.

## Visión
Elite combina **hábitos + plantillas guiadas + IA** para que cada usuario convierta sus metas en acciones diarias.

## Módulos principales

1. **Inicio motivacional**
   - Pantalla inicial con frases motivacionales.
   - Rotación diaria y opción de guardar favoritas.

2. **Tracker de hábitos**
   - Crear, editar y completar hábitos.
   - Elegir hábitos sugeridos por categoría (lectura, ejercicio, sueño, etc.).
   - Ver rachas, porcentaje de cumplimiento y progreso semanal/mensual.

3. **Plantillas precreadas**
   - Cada plantilla incluye guía, métricas y plan de acción:

   ### Lectura
   - Recomendación de libros por objetivo (seguridad, liderazgo, finanzas, etc.).
   - Configuración de páginas por día o minutos por sesión.
   - Proyección automática:
     - libros por año,
     - tiempo estimado para terminar cada libro,
     - fecha estimada de finalización.

   ### Afirmaciones
   - Objetivo emocional definido: seguridad, autoestima, confianza, carácter, autoridad.
   - Constructor de afirmaciones personalizadas.
   - Recordatorios diarios mañana/noche.

   ### Alimentación
   - Cálculo de calorías objetivo (déficit, mantenimiento o superávit).
   - Recomendaciones para:
     - bajar grasa,
     - ganar músculo.
   - Registro de comidas y macros (proteínas, carbohidratos, grasas).

   ### Ejercicio
   - Rutinas recomendadas según meta (fuerza, músculo, pérdida de grasa, rendimiento).
   - Seguimiento de series, repeticiones y peso.
   - Progresión semanal y alertas de sobrecarga.

   ### Proyectos (libreta)
   - Espacio para escribir y dibujar ideas.
   - Soporte para subir bocetos o crear diagramas.
   - IA para generar imágenes según la descripción del proyecto.

   ### Finanzas
   - Presupuesto mensual organizado en los 12 meses del año.
   - Registro automático de gastos con tarjeta (vía integración bancaria futura).
   - Registro manual de gastos en efectivo.
   - Reportes por categoría y alertas por exceso de gasto.

   ### Avatar y plan de vida
   - Avatar personalizable.
   - Sección de principios personales.
   - Metas con plazos y estado de avance.
   - Registro de peso corporal y evolución.

## Estructura del proyecto

Este repositorio incluye una propuesta inicial de producto y datos semilla para acelerar el desarrollo:

- `docs/PRODUCTO.md`: alcance funcional, roadmap MVP y arquitectura sugerida.
- `data/seed_templates.json`: catálogo inicial de plantillas y hábitos sugeridos.
- `data/motivational_quotes_es.json`: frases motivacionales para pantalla de inicio.

## Próximo paso recomendado

Construir un **MVP web/mobile** con estos 4 pilares primero:

1. Auth + perfil.
2. Tracker de hábitos.
3. Plantillas de lectura, ejercicio y alimentación.
4. Inicio con frases motivacionales y dashboard de progreso.

Luego escalar con IA de proyectos, finanzas conectadas y avatar avanzado.
