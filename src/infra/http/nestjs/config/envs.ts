type Envs = {
    port: string;
}

const envs: Envs = {
    port: process.env.PORT
}

export default envs