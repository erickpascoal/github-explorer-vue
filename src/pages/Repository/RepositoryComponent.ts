import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import { Issue } from "../../models/Issue";
import Repository from "../../models/Repository";
import issueService from "../../services/issueService";
import repositoryService from "../../services/repositoryService";

export default defineComponent({

    mounted() {
        const route = useRoute();
        const { fullName } = route.query;
        this.loadRepository(String(fullName))
        this.loadIssues(String(fullName))
    },

    data() {
        const repository: Repository = {} as Repository;
        const issues: Issue[] = [];

        return {
            repository,
            issues
        }
    },

    methods: {
        async loadRepository(repositoryName: string) {
            const response = await repositoryService.findOneByName(repositoryName)
            this.repository = response.data;
        },

        async loadIssues(repositoryName: string) {
            const response = await issueService.findByRepositoryName(repositoryName)
            this.issues = response.data;
        }
    }
});