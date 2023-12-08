package HM_Sushhnost.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import HM_Sushhnost.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: ПоказанияПр
 */
@Entity(name = "IISHM_SushhnostПоказанияПр")
@Table(schema = "public", name = "ПоказанияПр")
public class PokazaniyaPr {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "id")
    private Integer id;

    @Column(name = "DateTime")
    private Date datetime;

    @Column(name = "T")
    private Double t;

    @Column(name = "P")
    private Double p;

    @Column(name = "M")
    private Double m;

    @Column(name = "Q")
    private Boolean q;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "PriboryZd")
    @Convert("PriboryZd")
    @Column(name = "ПриборыЗд", length = 16, unique = true, nullable = false)
    private UUID _priboryzdid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "PriboryZd", insertable = false, updatable = false)
    private PriboryZd priboryzd;


    public PokazaniyaPr() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getid() {
      return id;
    }

    public void setid(Integer id) {
      this.id = id;
    }

    public Date getDateTime() {
      return datetime;
    }

    public void setDateTime(Date datetime) {
      this.datetime = datetime;
    }

    public Double getT() {
      return t;
    }

    public void setT(Double t) {
      this.t = t;
    }

    public Double getP() {
      return p;
    }

    public void setP(Double p) {
      this.p = p;
    }

    public Double getM() {
      return m;
    }

    public void setM(Double m) {
      this.m = m;
    }

    public Boolean getQ() {
      return q;
    }

    public void setQ(Boolean q) {
      this.q = q;
    }


}