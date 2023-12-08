package HM_Sushhnost.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import HM_Sushhnost.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ПриборыЗд
 */
@Entity(name = "IISHM_SushhnostПриборыЗд")
@Table(schema = "public", name = "ПриборыЗд")
public class PriboryZd {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "id")
    private Integer id;

    @Column(name = "Mmax")
    private Double mmax;

    @Column(name = "Mmin")
    private Double mmin;

    @Column(name = "Tmax")
    private Double tmax;

    @Column(name = "Tmin")
    private Double tmin;

    @Column(name = "Pmax")
    private Double pmax;

    @Column(name = "UrovZar")
    private Double urovzar;

    @Column(name = "PrivT")
    private Boolean privt;

    @Column(name = "PrivP")
    private Boolean privp;

    @Column(name = "PrivM")
    private Boolean privm;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Zdanie")
    @Convert("Zdanie")
    @Column(name = "Здание", length = 16, unique = true, nullable = false)
    private UUID _zdanieid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Zdanie", insertable = false, updatable = false)
    private Zdanie zdanie;


    public PriboryZd() {
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

    public Double getMmax() {
      return mmax;
    }

    public void setMmax(Double mmax) {
      this.mmax = mmax;
    }

    public Double getMmin() {
      return mmin;
    }

    public void setMmin(Double mmin) {
      this.mmin = mmin;
    }

    public Double getTmax() {
      return tmax;
    }

    public void setTmax(Double tmax) {
      this.tmax = tmax;
    }

    public Double getTmin() {
      return tmin;
    }

    public void setTmin(Double tmin) {
      this.tmin = tmin;
    }

    public Double getPmax() {
      return pmax;
    }

    public void setPmax(Double pmax) {
      this.pmax = pmax;
    }

    public Double getUrovZar() {
      return urovzar;
    }

    public void setUrovZar(Double urovzar) {
      this.urovzar = urovzar;
    }

    public Boolean getPrivT() {
      return privt;
    }

    public void setPrivT(Boolean privt) {
      this.privt = privt;
    }

    public Boolean getPrivP() {
      return privp;
    }

    public void setPrivP(Boolean privp) {
      this.privp = privp;
    }

    public Boolean getPrivM() {
      return privm;
    }

    public void setPrivM(Boolean privm) {
      this.privm = privm;
    }


}