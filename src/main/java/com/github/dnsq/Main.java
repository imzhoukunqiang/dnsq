package com.github.dnsq;

import io.quarkus.runtime.Quarkus;
import io.quarkus.runtime.annotations.QuarkusMain;

import java.io.File;

@QuarkusMain
public class Main {

    public static void main(String... args) {
        createWorkDir("dnsq");
        Quarkus.run(args);
    }

    private static void createWorkDir(String dir) {
        File workDir = new File(dir);
        if (!workDir.exists()) {
            boolean created = workDir.mkdirs();
        }

    }
}
