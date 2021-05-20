<template>
  <div class="project-box">
    <span class="badge" :class="'badge-' + project.type">{{
      project.badge
    }}</span>
    <h6>{{ project.title }}</h6>

    <p>{{ project.desc }}</p>
    <div class="row details">
      <div class="col-6">
        <span
          ><router-link :to="`/main/soal/${project.id}`"
            >Jumlah Soal</router-link
          >
        </span>
      </div>
      <div class="col-6 text-primary" :class="'text-' + project.type">
        {{ project.soal }}
      </div>
      <div class="col-6">
        <span>
          <router-link to="/main/soal">Sudah Mengerjakan</router-link></span
        >
      </div>
      <div class="col-6 text-primary" :class="'text-' + project.type">
        {{ project.jumlah_selesai }}
      </div>
    </div>

    <div class="project-status mt-4">
      <div class="media mb-0">
        <p>{{ project.progress }}%</p>
        <div class="media-body text-right">
          <span>Done</span>
        </div>
      </div>
      <div class="progress" style="height: 5px">
        <div
          class="progress-bar-animated progress-bar-striped"
          :class="'bg-' + project.type"
          role="progressbar"
          :style="{
            width: project.progress + '%',
          }"
          aria-valuenow="10"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["project"],
  methods: {
    getImgUrl(path) {
      // return require("@/assets/images/" + path);
    },
  },
};
</script>