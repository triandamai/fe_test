<template>
  <div>
    <Breadcrumbs main="Widgets" title="Projects" />
    <!-- Container-fluid starts-->
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12 project-list">
          <div class="card">
            <div class="row">
              <div class="col-sm-12 p-0">
                <b-tabs content-class="mt-3">
                  <b-tab active>
                    <template v-slot:title>
                      <feather type="target"></feather> All
                    </template>
                    <b-card-text>
                      <div class="col-sm-12 p-0">
                        <div class="card">
                          <div class="card-body">
                            <div class="row">
                              <div
                                class="col-xl-4 col-lg-6"
                                v-for="(project, index) in allprojects"
                                :key="index"
                                :class="index < 3 ? 'mb-4' : ''"
                              >
                                <card-list :project="project" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </b-card-text>
                  </b-tab>
                  <b-tab>
                    <template v-slot:title>
                      <feather type="info"></feather> Doing
                    </template>
                    <b-card-text>
                      <div class="col-sm-12 p-0">
                        <div class="card">
                          <div class="card-body">
                            <div class="row">
                              <div
                                class="col-xl-4 col-lg-6"
                                v-for="(project, index) in doingprojects"
                                :key="index"
                                :class="index < 3 ? 'mb-4' : ''"
                              >
                                <card-list :project="project" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </b-card-text>
                  </b-tab>
                  <b-tab>
                    <template v-slot:title>
                      <feather type="check-circle"></feather> Done
                    </template>
                    <b-card-text>
                      <div class="col-sm-12 p-0">
                        <div class="card">
                          <div class="card-body">
                            <div class="row">
                              <div
                                class="col-xl-4 col-lg-6"
                                v-for="(project, index) in doneprojects"
                                :key="index"
                                :class="index < 3 ? 'mb-4' : ''"
                              >
                                <card-list :project="project" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </b-card-text>
                  </b-tab>
                </b-tabs>
              </div>
              <div class="col-sm-6 create-project-btn">
                <div class="text-right">
                  <v-btn @click="show = !show" outlined small>Tambah</v-btn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Container-fluid Ends-->
    <form-list :show="show" @close="show = !show" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      allprojects: [
        {
          id: 1,
          title: "Endless admin Design",
          badge: "Doing",
          type: "primary",

          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          soal: "24",
          jumlah_selesai: "3",
          like: "10",
          progress: "70",
        },
      ],
      doingprojects: [
        {
          id: 4,
          title: "Universal admin Design",
          badge: "Doing",
          type: "primary",

          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          soal: "24",
          jumlah_selesai: "3",
          like: "+3 More",
          progress: "100",
        },
        {
          id: 5,
          title: "Endless admin Design",
          badge: "Doing",
          type: "primary",

          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          soal: "24",
          jumlah_selesai: "3",
          like: "+10 More",
          progress: "70",
        },
        {
          id: 6,
          title: "Poco admin Design",
          badge: "Doing",
          type: "primary",

          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          soal: "24",
          jumlah_selesai: "3",
          like: "+2 More",
          progress: "100",
        },
      ],
      doneprojects: [
        {
          id: 1,
          title: "Endless admin Desig",
          badge: "Done",
          type: "primary",

          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          soal: "24",
          jumlah_selesai: "3",
          like: "+10 More",
          progress: "70",
        },
      ],
    };
  },

  methods: {
    getImgUrl(path) {
      // return require("@/assets/images/" + path);
    },
  },
};
</script>
