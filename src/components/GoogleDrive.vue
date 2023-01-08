<script setup lang="ts">
import { ref } from "vue";
import { loadScript } from "vue-plugin-load-script";

const CLIENT_ID = "900725878557-avf3davcrbmhrb0t005fjbhbfu1d3aa2.apps.googleusercontent.com"
const SCOPE = "https://www.googleapis.com/auth/drive"

const scriptStatus = ref("Not loaded")
const accessToken = ref("")

// TODO only show the button if the script has loaded
loadScript("https://accounts.google.com/gsi/client").then(() => {
    scriptStatus.value = "Loaded"
}).catch(() => {
    scriptStatus.value = "Loading failed"
})

function authorizeGoogle() {
    const client = google.accounts.oauth2.initTokenClient({
        client_id: CLIENT_ID,
        scope: SCOPE,
        callback: (response) => {
            accessToken.value = response.access_token
        },
    });
    client.requestAccessToken()
}

function listFiles() {
    
}
</script>

<template>
    <div>
        {{ scriptStatus }}<br/>
        <button @click="authorizeGoogle()">Auth with Google</button><br/>
        Access Token: {{ accessToken }}<br/>
        <button @click="listFiles()">List Google Drive files</button><br/>
    </div>
</template>
