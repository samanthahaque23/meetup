<template >
    <v-container class="align-center d-flex justify-center flex-column">
        <v-row class="col-md-6"> </v-row>
        <v-row class="col-md-6">
            <v-col>
                <v-card>
                    <v-col class="col-md-12" v-if="error">
                        <app-alert
                            @dismissed="onDismissed"
                            color="error"
                            :text="error"
                        ></app-alert>
                    </v-col>

                    <form class="pa-4" @submit.prevent="onSignup">
                        <label for="email"> Email</label>
                        <v-text-field
                            name="email"
                            class="email"
                            id="email"
                            v-model="email"
                            type="email"
                        >
                        </v-text-field>
                        <label for="password"> Password</label>

                        <v-text-field
                            name="password"
                            class="password"
                            id="password"
                            v-model="password"
                            :rules="[rules.required]"
                            type="password"
                        >
                        </v-text-field>
                        <label for="password">Confirm Password</label>

                        <v-text-field
                            name="confirmPassword"
                            class="confirmPassword"
                            id="confirmPassword"
                            v-model="confirmPassword"
                            :rules="[rules.required, rules.match]"
                            type="password"
                        >
                        </v-text-field>
                        <v-btn
                            :loading="loading"
                            :disabled ="loading"
                            type="submit"
                            class="flex-grow-1"
                            height="48"
                            variant="tonal"
                        >
                            Sign Up 
                        </v-btn>
                    </form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    props: ["text"],
    data() {
        return {
            email: "",
            password: "",
            confirmPassword: "",
            rules: {
                required: (value) => !!value || "Required.",
                min: (v) => v.length >= 8 || "Min 8 characters",
                match: this.comparePasswords,
            },
        };
    },
    computed: {
        user() {
            return this.$store.getters.user;
        },
        error() {
            console.log(this.$store.getters.error, "comp");
            return this.$store.getters.error;
        },
        loading(){
            return this.$store.getters.loading;

        }
    },
    watch: {
        user(value) {
            if (value !== null && value !== undefined) {
                this.$router.push("/");
            }
        },
    },
    methods: {
        onSignup() {
            this.$store.dispatch("signUserUp", {
                email: this.email,
                password: this.password,
            });
        },
        onDismissed() {
            console.log("dis");
            this.$store.dispatch("clearError");
        },
        comparePasswords() {
            if (this.password !== this.confirmPassword) {
                return "passwords does not match";
            } else return "confirmed ";
        },
    },
};
</script>