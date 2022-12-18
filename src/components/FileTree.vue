<script setup lang="ts">
import { ref, onMounted } from "vue";
import {
  decodeCredential,
  GoogleLogin,
  type CallbackTypes,
} from "vue3-google-login";

// reactive state
const count = ref(0);

// functions that mutate state and trigger updates
function increment() {
  count.value++;
}

const callback: CallbackTypes.CredentialCallback = (response) => {
  console.log(response);
  const userData = decodeCredential(response.credential);
  console.log("Handle the userdata", userData);

  fetch(
    "https://www.googleapis.com/drive/v3/files?key=AIzaSyACBpG5bKOwHb_n6f_ObMGrXqRsZPKIF4Q",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + btoa(response.credential),
      },
    }
  )
    .catch((reason) => {
      console.log(reason);
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
};

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${count.value}.`);
});
</script>

<template>
  <div>
    <button @click="increment">Count is: {{ count }}</button>
    <GoogleLogin :callback="callback" />
  </div>
</template>
