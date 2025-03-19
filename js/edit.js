const editBtn = document.getElementById('edit-btn');
const markView = document.getElementById('markdown');
const editor = document.getElementById('editor');

let isEditing = false;
let markdownText = "";

function renderMarkdown(){
	markView.innerHTML = marked.parse(markdownText);
}

editBtn.addEventListener('click', () => {
	isEditing = !isEditing;

	if(isEditing){
		editor.style.display = 'block';
		markView.style.display = 'none';
		editor.value = markdownText;
	}else{
		editor.style.display = 'none';
		markView.style.display = 'block';
		markdownText = editor.value;
		renderMarkdown();
	}
});

renderMarkdown();
