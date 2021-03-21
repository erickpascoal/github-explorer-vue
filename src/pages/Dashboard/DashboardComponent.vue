<template>
  <img src="../../assets/images/logo.svg" alt="Logo" />

  <h1 class="title">Explore repositórios no Github</h1>

  <div class="container">
    <form @submit.prevent="handleAddRepository()">
      <input
        type="text"
        v-model="repositoryName"
        name="repositoryName"
        placeholder="Digite usuário/repositório aqui"
        :class="{ 'input-error': findError.type == 'danger' }"
      />
      <button>Pesquisar</button>
    </form>

    <span
      :class="{
        'find-error-warning': findError.type == 'warning',
        'find-error-danger': findError.type == 'danger',
      }"
      >{{ findError.message }}</span
    >

    <div class="repository">
      <a
        v-for="repository in repositories"
        :key="repository.full_name"
        @click="handleGoToRepositoryDetail(repository.full_name)"
      >
        <img :src="repository.owner.avatar_url" :alt="repository.owner.login" />

        <div>
          <strong>{{ repository.full_name }}</strong>
          <p>{{ repository.description }}</p>
        </div>

        <i class="fa fa-chevron-right"></i>
      </a>
    </div>
  </div>
</template>

<script src="./DashboardComponent.ts"></script>
<style src="./DashboardComponent.scss"></style>