<template>
    <v-container>
        <v-card class="pa-3 ma-3" width="800px" height="100%">
            <v-form ref="form" @submit.prevent="onCreateMeetup">
                <h2 class="centralized">Create a New Meetup</h2>
                <v-text-field
                    name="title"
                    label="title"
                    id="title"
                    v-model="title"
                    required
                ></v-text-field>

                <v-text-field
                    name="Location"
                    label="Location"
                    id="Location"
                    v-model="location"
                    required
                ></v-text-field>

                <v-text-field
                    name="imageUrl"
                    v-model="imageUrl"
                    label="imageUrl"
                    id="image_url"
                    required
                ></v-text-field>
                <v-row class="ma-2">
                    <v-img
                        max-width="300px"
                        max-height="250px"
                        :src="imageUrl"
                    ></v-img>
                </v-row>
                <v-row><div class="pa-3">pick the date & time:</div> </v-row>
                <v-row>
                    <v-col>
                        <v-date-picker v-model="date"> </v-date-picker>
                        <p>{{ date }}</p>
                    </v-col>
                    <v-col>
                        <v-time-picker v-model="time"> </v-time-picker>
                        <p>{{ time }}</p>
                    </v-col>
                </v-row>
                <v-text-field
                    name="description"
                    label="description"
                    v-model="description"
                    id="description"
                    required
                    multi-line
                ></v-text-field>

                <div style="display: flex; justify-content: end">
                    <v-btn
                        color="primary"
                        class="mr-4"
                        :disabled="!formIsValid"
                        type="submit"
                    >
                        Save
                    </v-btn>

                    <v-btn color="secondary"> Cancel </v-btn>
                </div>
            </v-form>
        </v-card></v-container
    >
</template>

<script>
export default {
    data() {
        return {
            title: "",
            location: "",
            imageUrl: "",
            description: "",
            date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                .toISOString()
                .substr(0, 10),
            time: new Date(),
        };
    },
    computed: {
        formIsValid() {
            return (
                this.title !== "" &&
                this.location !== "" &&
                this.imageUrl !== "" &&
                this.description !== ""
            );
        },
        submittableDateTime() {
            const date = new Date(this.date);
            if (typeof this.time === "string") {
                let hours = this.time.match(/^(\d+)/)[1];
                let minutes = this.time.match(/:(\d+)/)[1];
                date.setHours(hours);
                date.setMinutes(minutes);
            } else {
                date.setHours(this.time.getHours());
                date.setMinutes(this.time.getMinutes());
            }
            return date;
        },
    },
    methods: {
        onCreateMeetup() {
            if (!this.formIsValid) {
                return;
            }
            const meetupData = {
                title: this.title,
                location: this.location,
                imageUrl: this.imageUrl,
                description: this.description,
                date: this.submittableDateTime,
            };
            this.$store.dispatch("createMeetup", meetupData);
            this.$router.push("/meetups");
        },
    },
};
</script>