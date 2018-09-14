//const STORAGE_KEY = 'todos-vuejs'
export default {
    fetchTodoList() {
        return JSON.parse(window.localStorage.getItem('todoList')||'[]')
    },
    saveTodoList(items) {
        window.localStorage.setItem('todoList', JSON.stringify(items))
    },
    fetchStar() {
        return (window.localStorage.getItem('star')||'[]')
    },
    saveStar(star){
        window.localStorage.setItem('star', star)
    }
}