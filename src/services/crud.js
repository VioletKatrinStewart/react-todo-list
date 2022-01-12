import { client, checkError } from './client.js';

export async function createToDo(task) {
  const resp = await client.from('todos').insert([{ task: task, user_id: client.auth.user().id }]);
  return checkError(resp);
}

export async function getTasks() {
  const resp = await client.from('todos').select('*');
  return checkError(resp);
}

export async function toggleCompleted(id, is_complete) {
  const resp = await client.from('todos').update({ is_complete }).eq('id', id);
  return checkError(resp);
}

// export async function deleteFromList(task) {
//   let resp = await client.from('todos').delete([{ task: task, user_id: client.auth.user().id }]);
//   return checkError(resp);
// }
