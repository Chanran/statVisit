package hibernate;

/**
 * Created by huimin on 17-6-10.
 */

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

public class Operation {
    private Session session = null;
    private Transaction tran = null;

    public Operation() {
        Configuration dbConf = new Configuration().configure();
        SessionFactory factory= dbConf.buildSessionFactory();
        this.session=factory.openSession();
    }

    public void save(Log log) {
        try {
            tran = this.session.beginTransaction();
            this.session.save(log);
            tran.commit();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            this.session.close();
        }
    }
}
