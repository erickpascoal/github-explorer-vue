import { Issue } from "../models/Issue";
import api from "./api"

export default {

    findByRepositoryName(repositoryName: string) {
        return api.get<Issue[]>(`/repos/${repositoryName}/issues`);
    }
}