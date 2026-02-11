# Elite — Documento de producto (v1)

## 1) Objetivo
Crear una app de desarrollo personal enfocada en hombres que quieren mejorar disciplina, fuerza, enfoque y resultados en salud, mentalidad, finanzas y propósito.

## 2) Perfil de usuario
- Hombres 18-45 años.
- Interés en mejorar hábitos, físico, seguridad personal y estabilidad financiera.
- Necesitan estructura clara, seguimiento y motivación diaria.

## 3) Propuesta de valor
- Un solo lugar para convertir metas en rutinas.
- Plantillas guiadas según objetivos reales.
- Métricas accionables con proyecciones.
- IA aplicada a creatividad (proyectos) y apoyo personal.

## 4) Funcionalidades núcleo (MVP)

### 4.1 Inicio motivacional
- Frase motivacional diaria.
- Acciones rápidas: completar hábito, registrar comida, abrir rutina.

### 4.2 Tracker de hábitos
- CRUD de hábitos.
- Selección desde hábitos sugeridos por categoría.
- Frecuencia: diaria, semanal, personalizada.
- Streak, tasa de cumplimiento, consistencia semanal.

### 4.3 Plantilla de lectura
- Meta anual de libros.
- Datos por libro: páginas, dificultad, estado.
- Cálculo de proyección:
  - `dias_estimados = paginas_totales / paginas_por_dia`
  - `fecha_fin_estimada = hoy + dias_estimados`

### 4.4 Plantilla de afirmaciones
- Objetivo principal (seguridad, autoestima, etc.).
- 3-10 afirmaciones personalizadas.
- Repeticiones por día y check de cumplimiento.

### 4.5 Plantilla de alimentación
- Objetivo corporal: bajar grasa / subir músculo / mantener.
- Calorías objetivo según perfil.
- Registro diario de calorías y macros.

### 4.6 Plantilla de ejercicio
- Objetivo físico y nivel.
- Rutina sugerida por objetivo.
- Seguimiento de sesiones y progresión.

### 4.7 Plantilla de proyectos (libreta)
- Notas libres + canvas para boceto.
- Organización por proyecto.
- Generación de imagen con IA basada en prompt.

### 4.8 Plantilla de finanzas
- Presupuesto por mes (enero–diciembre).
- Gastos por tarjeta y en efectivo.
- Balance mensual y anual.

### 4.9 Plantilla avatar y plan de vida
- Avatar personalizable.
- Principios y valores personales.
- Metas + plazos + porcentaje de avance.
- Registro de peso y evolución.

## 5) Roadmap sugerido

### Fase 1 (0–6 semanas)
- Auth y perfil básico.
- Tracker de hábitos.
- Inicio motivacional.
- Lectura + alimentación + ejercicio.

### Fase 2 (6–12 semanas)
- Afirmaciones y plan de vida.
- Finanzas mensuales.
- Mejoras de métricas y notificaciones.

### Fase 3 (12+ semanas)
- Libreta de proyectos avanzada.
- IA de imágenes para proyectos.
- Integración bancaria para gastos de tarjeta.

## 6) Arquitectura sugerida
- Frontend: React Native (iOS/Android) o Flutter.
- Backend: Node.js (NestJS/Express).
- DB: PostgreSQL.
- Cache/colas: Redis (notificaciones, jobs de IA).
- IA imágenes: proveedor externo (OpenAI Images u otro).

## 7) Modelo de datos base
Entidades:
- `users`
- `habits`, `habit_logs`
- `templates`
- `reading_plans`, `books`
- `affirmations`
- `nutrition_logs`
- `workouts`, `workout_logs`
- `projects`, `project_notes`, `project_images`
- `budgets`, `transactions`
- `avatars`, `principles`, `goals`, `weight_logs`

## 8) Métricas clave de producto
- DAU/WAU.
- % usuarios que completan 1 hábito diario.
- Retención día 7 y día 30.
- Número de metas activas por usuario.
- Promedio de cumplimiento semanal.

## 9) Criterios de éxito inicial
- Usuario puede crear hábitos y completar seguimiento diario.
- Usuario puede elegir una plantilla y registrar datos.
- App entrega proyección útil (lectura, calorías, finanzas).
- Inicio muestra contenido motivacional relevante.
