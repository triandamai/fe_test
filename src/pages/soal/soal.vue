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
                :items="nasabah"
                :headers="headers"
                @add="$router.push({ name: 'addnasabah' })"
                @edit="onChange"
                @delete="onDelete"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Container-fluid Ends-->
  </div>
</template>

<script>
import header from "../../data/headernasabah.json";

import { mapState } from "vuex";
export default {
  data: () => {
    return {
      headers: header,
      nasabah: [],
    };
  },
  computed: {
    ...mapState({}),
  },
  created() {},
  methods: {
    onChange(nasabah) {
      this.$router.push({ path: `soal/edit/${nasabah.id}` });
    },
    onDelete(nasabah) {
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
        }
      });
    },
  },
};
</script>