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
                <v-file-input
                  @change="onImport"
                  v-model="files"
                  chips
                  multiple
                  label="Upload Excel"
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
import xlsx from "xlsx";
import { ACTION_SAVE_SOAL } from "@/store/index";
export default {
  props: ["show", "body"],
  data: () => {
    return {
      checkbox: null,
      files: null,
      form: [],
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
    getHeader(a) {},
    onImport(e) {
      if (!this.files.length) {
        return;
      } else if (!/\.(xls|xlsx)$/.test(this.files[0].name.toLowerCase())) {
        return alert("format slaah");
      }
      const fileReader = new FileReader();
      fileReader.onload = (ev) => {
        try {
          const data = ev.target.result;
          const XLSX = xlsx;
          const workbook = XLSX.read(data, {
            type: "binary",
          });
          const wsname = workbook.SheetNames[0];
          const ws = XLSX.utils.sheet_to_json(workbook.Sheets[wsname]);

          ws.map((soal) => {
            this.form.push({
              id: 0,
              question: soal["Soal"],
              mimetype: "text",
              answer: soal["Jawaban Benar"],
              a: soal["Opsi A"],
              b: soal["Opsi B"],
              c: soal["Opsi C"],
              d: soal["Opsi D"],
            });
          });
        } catch (error) {
          return alert("read failur" + error);
        }
      };
      fileReader.readAsBinaryString(this.files[0]);
    },
  },
};
</script>