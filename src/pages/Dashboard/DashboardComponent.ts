import { defineComponent } from "vue";
import Repository from "../../models/Repository";
import repositoryService from "../../services/repositoryService";


interface FindError {
    message: string;
    type: string;
}

export default defineComponent({
    name: 'Dashboard',

    mounted() {
        this.getRepositoriesFromStorage()
    },

    data() {
        const repositoryName: string = '';
        const repositories: Repository[] = [];
        const findError: FindError = {} as FindError;

        return {
            repositories,
            repositoryName,
            findError
        }
    },

    methods: {
        getRepositoriesFromStorage() {
            const storagedRepositories = localStorage.getItem('@GithubExplorer:repositories');
            if (storagedRepositories) {
                this.repositories = JSON.parse(storagedRepositories);
            }
        },

        setRepositoriesInStorage() {
            localStorage.setItem('@GithubExplorer:repositories', JSON.stringify(this.repositories));
        },

        async handleAddRepository() {
            try {
                if (!this.repositoryName) {
                    return;
                }

                const response = await repositoryService.findOneByName(this.repositoryName);
                const repository = response.data;

                const findRepository = this.repositories.find(repo => repo.full_name == repository.full_name)

                if (findRepository) {
                    this.setFindError('Este repositório já está em sua lista', 'warning');
                } else {
                    this.repositories.push(repository);
                    this.setRepositoriesInStorage();
                    this.repositoryName = '';
                    this.findError = {} as FindError;
                }
            } catch (error) {
                this.setFindError('Não foi possível localizar este repositório');
            }

        },

        setFindError(message: string, type?: 'danger' | 'warning') {
            if (!type) type = 'danger';

            this.findError.message = message;
            this.findError.type = type;
        },

        handleGoToRepositoryDetail(fullName: string) {
            this.$router.push({ path: `/repositorio`, query: { fullName: fullName } })
        }
    }
});