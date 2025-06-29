package com.github.dnsq.service;

import com.github.dnsq.jooq.tables.daos.ClickDao;
import com.github.dnsq.jooq.tables.pojos.Click;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import org.jooq.DSLContext;

import static com.github.dnsq.jooq.Tables.CLICK;

@ApplicationScoped
public class ClickSerivce {
    @Inject
    ClickDao clickDao;
    @Inject
    DSLContext dslContext;

    public Click incrementClick(int id) {
        if (clickDao.findById(id) == null) {
            Click click = new Click(id, 1);
            dslContext.newRecord(CLICK, click).insert();
            return click;
        }
        dslContext.update(CLICK)
            .set(CLICK.COUNT, CLICK.COUNT.add(1))
            .where(CLICK.ID.eq(id))
            .execute();
        return clickDao.findById(id);
    }
}
