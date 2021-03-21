<template>
  <header class="container-header">
    <img src="../../assets/images/logo.svg" alt="Logo" />
    <router-link to="/">
      <i class="fa fa-chevron-left"></i>
      Voltar
    </router-link>
  </header>

  <section class="repository-info" v-if="repository?.full_name">
    <header class="repository-header">
      <img :src="repository.owner.avatar_url" :alt="repository.owner.login" />
      <div>
        <strong>{{ repository.full_name }}</strong>
        <p>{{ repository.description }}</p>
      </div>
    </header>
    <ul>
      <li>
        <strong>{{ repository.stargazers_count }}</strong>
        <span>Stars</span>
      </li>

      <li>
        <strong>{{ repository.forks_count }}</strong>
        <span>Forks</span>
      </li>

      <li>
        <strong>{{ repository.open_issues_count }}</strong>
        <span>Issues abertas</span>
      </li>
    </ul>
  </section>

  <div class="issues">
    <a
      v-for="issue in issues"
      :key="issue.id"
      :href="issue.html_url"
      target="_blank"
    >
      <div>
        <strong>{{ issue.title }}</strong>
        <p>{{ issue.user.login }}</p>
      </div>
      <i class="fa fa-chevron-right"></i>
    </a>
  </div>
</template>

<script src="./RepositoryComponent.ts"></script>
<style src="./RepositoryComponent.scss"></style>