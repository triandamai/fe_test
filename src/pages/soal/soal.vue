<template>
  <div>
    <Breadcrumbs title="Nasabah" />
    <!-- Container-fluid starts-->
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <h5>Sample Card</h5>
              <span
                >lorem ipsum dolor sit amet, consectetur adipisicing elit</span
              >
            </div>
            <div class="card-body">
              <data-table
                :items="items"
                :headers="headers"
                @add="show = !show"
                @import="importsoal = !importsoal"
                @edit="onChange"
                @delete="onDelete"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Container-fluid Ends-->
    <form-soal
      :show="show"
      @close="show = !show"
      :body="body"
      @submit="onSubmit"
    />
    <form-soal-excel
      :show="importsoal"
      @close="importsoal = !importsoal"
      body=""
      @submit="onBatch"
    />
  </div>
</template>

<script>
import header from "../../data/headersoal.json";

import { mapState } from "vuex";
import {
  ACTION_SAVE_SOAL,
  ACTION_GET_SOAL,
  ACTION_DELETE_SOAL,
} from "@/store/index";
export default {
  data: () => {
    return {
      show: false,
      importsoal: false,
      headers: header,
      body: {},
    };
  },
  computed: {
    ...mapState({
      items: (state) => state.soal.soal.data,
    }),
  },
  created() {
    this.getSoal();
  },
  methods: {
    getSoal() {
      this.$store.dispatch(ACTION_GET_SOAL).then(() => {});
    },
    onChange(soal) {
      this.show = true;
      this.body = soal;
    },
    onDelete(soal) {
      this.$swal({
        text: `Hapus ?`,
        showCancelButton: true,
        confirmButtonText: "Oke",
        confirmButtonColor: "#4466f2",
        cancelButtonText: "Batal",
        cancelButtonColor: "#efefef",
        reverseButtons: true,
      }).then(({ value }) => {
        if (value) {
          this.$store
            .dispatch(ACTION_DELETE_SOAL, soal)
            .then(({ success, message }) => {
              this.$toasted.show(`${message}`, {
                theme: "bubble",
                position: "top-right",
                type: success ? "success" : "error",
                duration: 2000,
              });
            });
        }
      });
    },
    onSubmit(data) {
      this.$store
        .dispatch(ACTION_SAVE_SOAL, data)
        .then(({ success, message }) => {
          this.$toasted.show(`${message}`, {
            theme: "bubble",
            position: "top-right",
            type: success ? "success" : "error",
            duration: 2000,
          });
        });
    },
    onBatch(form) {
      form.map((data) => {
        this.$store.dispatch(ACTION_SAVE_SOAL, data).then(() => {});
      });
      this.$toasted.show(`Berhasil`, {
        theme: "bubble",
        position: "top-right",
        type: "success",
        duration: 2000,
      });
    },
  },
};
</script>