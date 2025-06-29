package com.github.dnsq;

import com.github.dnsq.jooq.tables.daos.ClickDao;
import com.github.dnsq.jooq.tables.pojos.Click;
import com.github.dnsq.service.ClickSerivce;
import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

@Path("/api/home")
public class HomeResource {
    @Inject
    ClickDao clickDao;
    @Inject
    ClickSerivce clickSerivce;


    @GET
    @Path("/hello")
    @Produces(MediaType.TEXT_PLAIN)
    public String hello() {
        return "Hello from dnsq.";
    }

    @GET
    @Path("/click-count/{id}")
    public Click clickCount(@PathParam("id") Integer id) {
        return clickDao.fetchOneById(id);
    }

    @PUT
    @Path("/click-count/{id}/increment")
    public Response upsertClick(@PathParam("id") Integer id) {
        return Response.ok(clickSerivce.incrementClick(id)).build();
    }

}
