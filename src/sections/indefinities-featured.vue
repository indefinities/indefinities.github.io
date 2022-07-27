<script setup>
/**
 * Page before the rest of works displaying featured proejcts
 */
import indefinitiesPage from '../components/indefinities-page.vue';
</script>

<template>
    <section class="indefinities-featured">
        <indefinities-page>
            <h1>Featured</h1>


        <div class="indefinities-featured__projects">
            <div class="indefinities-featured__project">
                <img src="../assets/nuhacks.png" />
                <a href="https://nuhacks.io">
                    <h2>NUHacks</h2>
                </a>
                <span>
                    <p>Vue JS</p>
                    <p>
                        <strong>NUHacks</strong> is a student organization on Northeastern campus for 
                        students interested in topics within computer science to disscuss and befriend other students.
                        During my time as Webmaster in the organization, I redesigned the website using Vue JS, updated
                        board memberd on the website, as well as updating the code of conduct. 
                    </p>
                </span>
            </div>

            <div class="indefinities-featured__project">
                <img src="../assets/tricone-demo.jpg" />
                <a href="https://devpost.com/software/tricone">
                    <h2>Tricorne</h2>
                </a>

                <span>
                    <p>Vue JS & Arduino</p>
                    <p>
                        During my sophomore year at Northeastern, I attended HackHarvard 2019. During my time at the hackathon,
                        me and my friends decided to create an Arduino web-app project inspired by an accessibility issue of visualizing sound.
                        My main resoponsibility for the project was creating graphic assets as well as considering the user experience of the 
                        web application for the user. 
                    </p>
                </span>
            </div>

            <div class="indefinities-featured__project">
                <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="400" height="900" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FduYaruNdbrIuOgsSV4pSNA%2FNatalie_Hsu%3Fnode-id%3D209%253A346%26scaling%3Dmin-zoom%26page-id%3D209%253A9" allowfullscreen></iframe>
                <a href="https://www.figma.com/proto/duYaruNdbrIuOgsSV4pSNA/Natalie_Hsu?node-id=209%3A346&scaling=min-zoom&page-id=209%3A9">
                    <h2>Kung Fu Tea (Redesign)</h2>
                </a>

                <span>
                    <p>Figma</p>
                    <p>
                        While I was taking ARTG 4700: Interaction Design II at Northeastern, the class was assigned to redesign an
                        application they frequently used. As someone who enjoys grabbing boba with friends after class, I thought 
                        the assignment would be a great opportunity to interview friends to empathize with how the user interacts with
                        the application. I had the ability to integrate my improvements I believed the application needed into the prototype as well.
                    </p>
                </span>
            </div>
        </div>
            
        </indefinities-page>
    </section>
</template>

<style lang="scss" scoped>
.indefinities-featured {
    &__projects {
        display: flex;
        flex-flow: column wrap;
    }
    &__project {
        margin-bottom: 30px;
        img {
            width: 100%;
            border-radius: 5%;

            @media only screen and (min-width: 500px) {
                width: 500px;
            }
        }
    }
}

</style>