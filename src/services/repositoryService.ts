import Repository from "../models/Repository";
import api from "./api"

export default {

    findOneByName(repositoryName: string) {
        return api.get<Repository>(`/repos/${repositoryName}`);
    }
}