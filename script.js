// التحقق من تحميل الصفحة بالكامل قبل تنفيذ أي كود
document.addEventListener('DOMContentLoaded', function () {
    
    // تحديد عناصر الـ DOM المطلوبة
    const addButton = document.getElementById('add-task-btn'); // زر إضافة المهمة
    const taskInput = document.getElementById('task-input');   // حقل إدخال المهمة
    const taskList = document.getElementById('task-list');     // قائمة عرض المهام

    // تعريف دالة لإضافة مهمة جديدة
    function addTask() {
        // جلب النص المدخل وإزالة الفراغات الزائدة
        const taskText = taskInput.value.trim();

        // التحقق من أن الحقل غير فارغ
        if (taskText === "") {
            alert("يرجى إدخال مهمة.");
            return;
        }

        // إنشاء عنصر <li> لتمثيل المهمة
        const li = document.createElement('li');
        li.textContent = taskText;

        // إنشاء زر لإزالة المهمة
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // ربط زر الإزالة بحذف العنصر عند النقر
        removeButton.onclick = function () {
            taskList.removeChild(li);
        };

        // إرفاق زر الإزالة إلى عنصر المهمة ثم إضافته للقائمة
        li.appendChild(removeButton);
        taskList.appendChild(li);

        // إعادة تعيين حقل الإدخال
        taskInput.value = '';
    }

    // ربط زر "Add Task" بدالة الإضافة
    addButton.addEventListener('click', addTask);

    // دعم إضافة المهمة عند الضغط على زر Enter في لوحة المفاتيح
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
