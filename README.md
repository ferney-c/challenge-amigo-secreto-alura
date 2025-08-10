# 🎁 Amigo Secreto

Una aplicación web interactiva para organizar sorteos de amigo secreto de manera sencilla y divertida.

## 📋 Descripción

Esta aplicación permite a los usuarios agregar nombres de amigos y realizar un sorteo aleatorio para determinar quién es el amigo secreto de quién. Es perfecta para intercambios de regalos, fiestas o cualquier evento donde necesites asignar participantes de forma aleatoria.

## 🚀 Cómo Usar el Proyecto

### Requisitos Previos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- No requiere instalación de dependencias adicionales

### Instalación y Configuración

1. **Descarga el proyecto**
   ```bash
   git clone https://github.com/ferney-c/challenge-amigo-secreto-alura.git
   cd challenge-amigo-secreto-alura
   ```

2. **Abre el proyecto**
   - Simplemente abre el archivo `index.html` en tu navegador web

### Uso Paso a Paso

#### 1. Agregar Amigos
![Agregar amigos - Campo de entrada con botón "Añadir"](https://github.com/user-attachments/assets/6f930776-a6dd-4b02-b944-ec136a36d9f6)
- Escribe el nombre de un amigo en el campo de entrada
- Haz clic en el botón **"Añadir"**
- El nombre aparecerá automáticamente en la lista debajo

#### 2. Ver la Lista de Amigos
![Lista de amigos - Nombres mostrados como elementos de lista](https://github.com/user-attachments/assets/b7181214-59d8-4308-848a-59400e2469ee)
- Todos los nombres agregados se muestran en una lista clara y ordenada
- Puedes agregar tantos amigos como necesites

#### 3. Realizar el Sorteo
![Sorteo - Botón "Sortear amigo" con resultado mostrado](https://github.com/user-attachments/assets/7ab99c42-aa39-4c35-b4e5-152003a7a1e6)
- Una vez que hayas agregado todos los amigos, haz clic en **"Sortear amigo"**
- El nombre del amigo secreto seleccionado aparecerá debajo de la lista

## 📁 Estructura del Proyecto

```
challenge-amigo-secreto_esp-main/
├── index.html          # Página principal con la interfaz
├── style.css           # Estilos y diseño responsivo
├── app.js             # Lógica de JavaScript
├── README.md          # Este archivo
└── assets/
   ├── amigo-secreto.png
   └── play_circle_outline.png
```

## 🎯 Funcionalidades Principales

- ✅ **Agregar nombres dinámicamente** - Añade amigos uno por uno
- ✅ **Visualización en tiempo real** - Ve los nombres actualizados instantáneamente
- ✅ **Selección aleatoria** - Sorteo justo y aleatorio usando JavaScript
- ✅ **Interfaz intuitiva** - Diseño limpio y fácil de usar
- ✅ **Responsive** - Funciona en dispositivos móviles y de escritorio

## 🛠️ Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos modernos y responsivos
- **JavaScript (ES6+)** - Lógica interactiva
- **Google Fonts** - Tipografía moderna (Inter, Merriweather)

## 🎮 Cómo Funciona

### Flujo de Datos
1. El usuario ingresa un nombre y presiona "Añadir"
2. El nombre se agrega al array `amigos[]`
3. La función `mostrarAmigos()` actualiza la vista
4. Al presionar "Sortear amigo", se ejecuta la función `sortearAmigo()`
5. Se selecciona un índice aleatorio y se muestra el resultado

### Algoritmo de Selección Aleatoria
```javascript
const indiceAleatorio = Math.floor(Math.random() * amigos.length);
const amigoSorteado = amigos[indiceAleatorio];
```

## 🐛 Solución de Problemas

| Problema | Solución |
|----------|----------|
| **No se muestran los nombres** | Verifica que JavaScript esté habilitado en tu navegador |
| **El sorteo no funciona** | Asegúrate de tener al menos un nombre en la lista |
| **Diseño desordenado** | Actualiza tu navegador a la versión más reciente |

## 🎨 Personalización

### Colores y Estilos
Puedes personalizar la apariencia editando el archivo `style.css`:
- Variables CSS personalizadas
- Colores del tema
- Tamaños de fuente
- Espaciados

### Funcionalidad Adicional
Para extender la funcionalidad, puedes modificar `app.js`:
- Agregar validación de nombres duplicados
- Permitir eliminar nombres
- Exportar/importar listas
- Guardar en localStorage

## 📄 Licencia

Este proyecto es de código abierto y está disponible para uso educativo y personal.

---

**¡Disfruta organizando tu amigo secreto! 🎉**
