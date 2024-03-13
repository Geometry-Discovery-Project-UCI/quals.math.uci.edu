FROM docker.io/library/node:lts AS build

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

COPY . /build
WORKDIR /build
RUN pnpm install && pnpm run build && mv .output/ /output

FROM docker.io/library/node:lts AS prod

COPY --from=build /output/ /app
WORKDIR /app

EXPOSE 3000
ENTRYPOINT [ "node" , "./server/index.mjs" ]
