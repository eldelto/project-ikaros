FROM golang:1.19-alpine3.16 as build

RUN apk add --update make npm

WORKDIR /go/src/app
COPY . .

RUN make init
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 make bin/tower

FROM gcr.io/distroless/static-debian11

USER nobody

COPY --from=build /go/src/app/bin/tower /
CMD ["/tower"]