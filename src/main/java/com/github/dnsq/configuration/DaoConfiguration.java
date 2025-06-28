package com.github.dnsq.configuration;

import com.github.dnsq.jooq.tables.daos.ClickDao;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.enterprise.inject.Produces;
import jakarta.inject.Inject;
import org.jooq.DSLContext;

@ApplicationScoped
public class DaoConfiguration {

    @Inject
    DSLContext dslContext;

    @Produces
    @ApplicationScoped
    public ClickDao clickDao() {
        return new ClickDao(dslContext.configuration());
    }

}