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
                <v-textarea
                  v-model="form.question"
                  filled
                  auto-grow
                  label="Soal"
                  rows="2"
                  row-height="20"
                />
              </v-col>

              <v-col cols="12">
                <v-subheader> Pilihan </v-subheader>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  v-model="form.a"
                  filled
                  auto-grow
                  label="Jawaban A"
                  rows="2"
                  row-height="20"
                />
              </v-col>
              <v-col cols="12">
                <v-textarea
                  v-model="form.b"
                  filled
                  auto-grow
                  label="Jawaban B"
                  rows="2"
                  row-height="20"
                />
              </v-col>
              <v-col cols="12">
                <v-textarea
                  v-model="form.c"
                  filled
                  auto-grow
                  label="Jawaban C"
                  rows="2"
                  row-height="20"
                />
              </v-col>
              <v-col cols="12">
                <v-textarea
                  v-model="form.d"
                  filled
                  auto-grow
                  label="Jawaban D"
                  rows="2"
                  row-height="20"
                />
              </v-col>
              <v-col cols="12"> <v-subheader> Jawaban </v-subheader></v-col>

              <v-col cols="12">
                <v-combobox
                  v-model="form.answer"
                  :items="items"
                  label="Pilih Jawaban"
                  dense
                ></v-combobox>
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
      items: ["A", "B", "C", "D"],
      form: {
        id: 0,
        question: "",
        mimetype: "text",
        answer: "",
        a: "",
        b: "",
        c: "",
        d: "",
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
      this.$emit("submit", {
        create: this.checkbox ? true : false,
        form: this.form,
      });
    },
  },
};
</script>