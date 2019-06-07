export default interface UserInterface {
    id: number;
    name: string;
    username: string;
    password: string;
    picture: string;
    isAdmin?: boolean;
}
