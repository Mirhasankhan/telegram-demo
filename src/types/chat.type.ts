export type TChat = {
  id: string;
  created_at: string;
  creator: { name: string };
}
export type TMessage = {
  message: string;
  sender: { name: string, updated_at: string };
}