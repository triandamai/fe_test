<template>
  <v-dialog
    transition="dialog-bottom-transition"
    max-width="600"
    v-model="show"
    persistent
  >
    <template v-slot:default="dialog">
      <v-card>
        <v-toolbar color="primary" dark>Form Soal</v-toolbar>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="form.title" label="Judul*" required />
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="form.desc" label="Deskripsi*" required />
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="form.soal"
                  label="Jumlah Soal*"
                  required
                />
              </v-col>
              <v-col cols="12">
                <v-checkbox
                  v-model="checkbox"
                  label="Tambahkan Soal Selesai Menyimpan"
                />
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="$emit('close', dialog.value)"
          >
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="submit"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>
<script>
export default {
  props: ["show", "body"],
  data: () => {
    return {
      checkbox: null,
      form: {
        id: 1,
        title: "Endless admin Design",
        badge: "Doing",
        type: "primary",
        sites: "Themeforest, australia",
        desc:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        soal: "24",
        jumlah_selesai: "3",
        like: "10",
        progress: "70",
      },
    };
  },
  watch: {
    body: function (newVal) {
      // this.form = newVal;
    },
  },
  methods: {
    submit() {
      this.$emit("submit", this.form);
    },
  },
};
</script>