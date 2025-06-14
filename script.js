// ننتظر حتى يتم تحميل محتوى الصفحة بالكامل
document.addEventListener('DOMContentLoaded', function () {

    // الحصول على العناصر من الصفحة
    const addButton = document.getElementById('add-task-btn'); // زر إضافة المهمة
    const taskInput = document.getElementById('task-input');   // حقل إدخال المهمة
    const taskList = document.getElementById('task-list');     // قائمة المهام

    // دالة لإضافة مهمة جديدة
    function addTask() {
        // قراءة النص من حقل الإدخال وإزالة الفراغات الزائدة
        const taskText = taskInput.value.trim();

        // إذا كان الإدخال فارغًا، نعرض تنبيه للمستخدم
        if (taskText === "") {
            alert("من فضلك أدخل مهمة.");
            return;
        }

        // إنشاء عنصر <li> لعرض المهمة
        const li = document.createElement('li');
        li.textContent = taskText;

        // إنشاء زر لحذف المهمة
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // عند الضغط على الزر، يتم حذف المهمة من القائمة
        removeButton.onclick = function () {
            taskList.removeChild(li);
        };

        // إضافة زر الحذف إلى عنصر <li>
        li.appendChild(removeButton);

        // إضافة عنصر <li> إلى القائمة
        taskList.appendChild(li);

        // مسح حقل الإدخال بعد إضافة المهمة
        taskInput.value = '';
    }

    // إضافة حدث عند الضغط على زر "Add Task"
    addButton.addEventListener('click', addTask);

    // إضافة حدث عند الضغط على مفتاح "Enter" في حقل الإدخال
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
