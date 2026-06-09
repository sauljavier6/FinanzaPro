import { useEffect, useState } from "react";
import { createCampana, getCampanaById, sendNotificacionTest, updateCampana } from "../../../api/AdminApis/campanaApi";
import { useRoles } from "../../../hooks/useRoles";

interface CampaignProps {
  campanaId?: number | null;
  onBack: () => void;
}

export default function CampañaPlantilla({ onBack, campanaId }: CampaignProps) {
  const { hasRole } = useRoles();
  const [canalPreview, setCanalPreview] = useState("whatsapp");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState({
    nombre: "",
    canal: 0,
    asunto: "",
    estado: 0,
    diasatraso: 0,
    repetirpor: 0,
    repetircada: 0,
    mensaje: `
      Hola {{cliente}},
      Te recordamos que tienes un saldo pendiente por {{monto}} con fecha de vencimiento el {{fecha}}.

      Para tu comodidad, puedes realizar tu pago aquí:
      {{link}}

      Si ya realizaste el pago, ignora este mensaje.`,
  });

  const VARIABLES = [
    { label: "Nombre Cliente", key: "{{cliente}}" },
    { label: "Monto", key: "{{monto}}" },
    { label: "Fecha Vencimiento", key: "{{fecha}}" },
    { label: "Link Pago", key: "{{link}}" },
    { label: "Estado de cuentas", key: "{{estado_cuentas}}" },
  ];

  const handleInsertVariable = (variable: string) => {
    setData((prev) => ({
      ...prev,
      mensaje: prev.mensaje + " " + variable,
    }));
  };

  const renderPreview = (text: string) => {
    return text
      .replace(/{{cliente}}/g, "Juan Pérez")
      .replace(/{{monto}}/g, "$4,500.00")
      .replace(/{{fecha}}/g, "15 de Noviembre")
      .replace(/{{link}}/g, "https://pago.cobranzapro.com/ax92j");
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!campanaId) return;

      try {
        console.log("campanaId", campanaId);

        const res = await getCampanaById(campanaId);

        if (res?.data) {
          setData({
            nombre: res.data.nombre || "",
            canal: res.data.canal || 0,
            asunto: res.data.asunto || "",
            estado: res.data.estado || 0,
            diasatraso: res.data.diasatraso || 0,
            repetirpor: res.data.repetirpor || 0,
            repetircada: res.data.repetircada || 0,
            mensaje: res.data.mensaje || "",
          });
        }

      } catch (error) {
        console.error("Error cargando campaña:", error);
      }
    };

    fetchData();
  }, [campanaId]);

  const handleSave = async () => {
    try {
      setLoading(true);
      setError(null);

      if (!data.nombre.trim()) {
        throw new Error("El nombre de la campaña es obligatorio");
      }

      if (!data.mensaje.trim()) {
        throw new Error("El mensaje no puede estar vacío");
      }

      const payload = {
        ...data,
        diasatraso: Number(data.diasatraso) || 0,
        repetirpor: Number(data.repetirpor) || 0,
      };

      if (campanaId) {
        await updateCampana(campanaId, payload);
        alert("Campaña actualizada correctamente");
        onBack()
      } else {
        await createCampana(payload);
        alert("Campaña guardada correctamente");
        onBack()
      }

      setData({
        nombre: "",
        canal: 0,
        asunto: "",
        estado: 0,
        diasatraso: 0,
        repetirpor: 0,
        repetircada: 0,
        mensaje: "",
      });

    } catch (err: any) {
      console.error(err);
      setError(err.message || "Error al guardar");
    } finally {
      setLoading(false);
    }
  };

  const sendTest = async () => {
    try {
      setLoading(true);
      setError(null);

      if (!data.nombre.trim()) {
        throw new Error("El nombre de la campaña es obligatorio");
      }

      if (!data.mensaje.trim()) {
        throw new Error("El mensaje no puede estar vacío");
      }

        await sendNotificacionTest(data);
        alert("Prueba enviada correctamente");
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Error al hacer test");
    } finally {
      setLoading(false);
    }
  };

  {
    error && (
      <div className="text-red-500 text-sm mt-2">
        {error}
      </div>
    )
  }

  return (
    <div className="flex overflow-hiddenq">
      <main className="flex-1 flex flex-col overflow-y-auto bg-background-light dark:bg-background-dark">
        {hasRole(1, 2) && (
        <div className="p-3 sm:p-8">

          <div className="flex flex-wrap gap-2 mb-2">
            <a onClick={() => onBack()} className="text-primary hover:underline text-sm font-medium hover:underline" href="#">Admin</a>
            <span className="text-[#4c669a] text-sm font-medium">/</span>
            <span className="text-[#0d121b] dark:text-white text-sm font-bold">Editor de Plantillas Dinámicas</span>
          </div>

          <div className="flex flex-wrap justify-between items-end gap-3 mb-8">
            <div className="flex flex-col gap-2">
              <h1 className="text-[#0d121b] dark:text-white text-3xl font-black leading-tight tracking-tight">Editor de Plantillas Dinámicas</h1>
              <p className="text-[#4c669a] text-base font-normal">Configura mensajes automáticos personalizados con variables de cliente.</p>
            </div>
            <div className="flex gap-3">
              {/* Guardar */}
              <button
                onClick={handleSave}
                disabled={loading}
                className="bg-primary text-white px-6 py-3 rounded-lg font-bold 
                disabled:opacity-50 disabled:cursor-not-allowed
                hover:bg-primary/90 transition-all active:scale-95"
              >
                {loading
                  ? campanaId
                    ? "Actualizando..."
                    : "Guardando..."
                  : campanaId
                    ? "Actualizar"
                    : "Guardar"
                }
              </button>

              {/* Enviar prueba */}
              <button
                onClick={sendTest}
                disabled={loading || !data.mensaje.trim()}
                className="bg-white border border-primary text-primary px-6 py-3 rounded-lg font-bold 
               flex items-center gap-2 transition-all
               hover:bg-primary hover:text-white
               disabled:opacity-50 disabled:cursor-not-allowed
               active:scale-95"
              >
                <span className="material-symbols-outlined text-lg">send</span>
                <span>Enviar Prueba</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="bg-white dark:bg-slate-900 rounded-xl border border-[#e7ebf3] dark:border-slate-800 p-6 shadow-sm">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">settings</span>
                  Configuración de Plantilla
                </h3>
                <div className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <label className="flex flex-col gap-2">
                      <span className="text-sm font-bold text-[#0d121b] dark:text-slate-300">Nombre de la Plantilla</span>
                      <input
                        value={data.nombre}
                        placeholder="Ej: Recordatorio de Vencimiento Próximo"
                        onChange={(e) =>
                          setData({
                            ...data,
                            nombre: e.target.value,
                          })
                        } className="form-input rounded-lg border-[#cfd7e7] dark:border-slate-700 dark:bg-slate-800 focus:border-primary focus:ring-primary/20 h-12 text-base" type="text" />
                    </label>
                    <label className="flex flex-col gap-2">
                      <span className="text-sm font-bold text-[#0d121b] dark:text-slate-300">Canal de Envío</span>
                      <select
                        name="canal"
                        value={data.canal}
                        onChange={(e) =>
                          setData({
                            ...data,
                            canal: Number(e.target.value)
                          })
                        }
                        className="form-select rounded-lg border-[#cfd7e7] dark:border-slate-700 dark:bg-slate-800 focus:border-primary focus:ring-primary/20 h-12 text-base"
                      >
                        <option value="0">Seleccione una opción</option>
                        <option value="1">WhatsApp</option>
                        <option value="2">Email</option>
                        <option value="3">Notificación Nativa</option>
                      </select>
                    </label>
                  </div>
                  <label className="flex flex-col gap-2">
                    <span className="text-sm font-bold text-[#0d121b] dark:text-slate-300">
                      Asunto
                    </span>
                    <input
                      name="asunto"
                      value={data.asunto}
                      onChange={(e) =>
                        setData({
                          ...data,
                          asunto: e.target.value,
                        })
                      }
                      className="form-input rounded-lg border-[#cfd7e7] dark:border-slate-700 dark:bg-slate-800 focus:border-primary focus:ring-primary/20 h-12 text-base"
                      placeholder="Ej: Importante: Tu pago vence pronto"
                      type="text"
                    />
                  </label>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-xl border border-[#e7ebf3] dark:border-slate-800 p-6 shadow-sm">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">
                    tune
                  </span>
                  Reglas de Segmentación
                </h3>

                <div className="flex flex-col gap-5">
                  {/* Estado */}
                  <label className="flex flex-col gap-2">
                    <span className="text-sm font-bold">Estado de la factura</span>
                    <select
                      value={data.estado}
                      onChange={(e) =>
                        setData({ ...data, estado: Number(e.target.value) })
                      }
                      className="h-12 rounded-lg border-[#cfd7e7] dark:border-slate-700 dark:bg-slate-800 px-3"
                    >
                      <option value="0">Seleccione una opción</option>
                      <option value="1">Pendiente</option>
                      <option value="2">Vencida</option>
                    </select>
                  </label>

                  {/* Días de atraso */}
                  <label className="flex flex-col gap-2">
                    <span className="text-sm font-bold">Días de atraso mayor o menor</span>
                    <input
                      type="number"
                      value={data.diasatraso}
                      onChange={(e) =>
                        setData({ ...data, diasatraso: Number(e.target.value) })
                      }
                      className="h-12 rounded-lg border-[#cfd7e7] dark:border-slate-700 dark:bg-slate-800 px-3"
                      placeholder="Ej: 5"
                    />
                  </label>

                  {/* perioricidad */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <label className="flex flex-col gap-2">
                      <span className="text-sm font-bold">Repetir por:</span>
                      <select
                        value={data.repetirpor}
                        onChange={(e) =>
                          setData({ ...data, repetirpor: Number(e.target.value) })
                        }
                        className="h-12 rounded-lg border-[#cfd7e7] dark:border-slate-700 dark:bg-slate-800 px-3"
                      >
                        <option value="0">Seleccione una opción</option>
                        <option value="1">Hora</option>
                        <option value="2">Dia</option>
                        <option value="3">Semana</option>
                        <option value="4">Mes</option>
                        <option value="5">Año</option>
                      </select>
                    </label>

                    <label className="flex flex-col gap-2">
                      <span className="text-sm font-bold">Repetir cada:</span>
                      <input
                        type="number"
                        value={data.repetircada}
                        onChange={(e) =>
                          setData({ ...data, repetircada: Number(e.target.value) })
                        }
                        className="h-12 rounded-lg border-[#cfd7e7] dark:border-slate-700 dark:bg-slate-800 px-3"
                        placeholder="Ej: 1"
                      />
                    </label>
                  </div>
                </div>
              </div>


              <div className="bg-white dark:bg-slate-900 rounded-xl border border-[#e7ebf3] dark:border-slate-800 overflow-hidden shadow-sm">
                <div className="p-4 border-b border-[#e7ebf3] dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex flex-wrap justify-between items-center gap-4">
                  <div className="flex items-center gap-1 text-[#4c669a]">
                  </div>
                  <div className="text-xs font-semibold text-[#4c669a] uppercase tracking-wider">Editor de Contenido</div>
                </div>
                <div className="p-6">
                  <label className="flex flex-col gap-3">
                    <span className="text-sm font-bold text-[#0d121b] dark:text-slate-300">Variables dinámicas (Click para insertar)</span>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {VARIABLES.map((v) => (
                        <button
                          key={v.key}
                          onClick={() => handleInsertVariable(v.key)}
                          className="px-3 py-1.5 bg-primary/10 text-primary hover:bg-primary/20 rounded-full text-xs font-bold border border-primary/20 transition-all flex items-center gap-1"
                        >
                          <span className="material-symbols-outlined text-sm">add_circle</span>
                          {v.label}
                        </button>
                      ))}
                    </div>
                    <textarea
                      value={data.mensaje}
                      onChange={(e) => setData({ ...data, mensaje: e.target.value })}
                      className="form-textarea w-full rounded-lg border-[#cfd7e7] dark:border-slate-700 dark:bg-slate-800 focus:border-primary focus:ring-primary/20 min-h-[300px] text-base leading-relaxed p-4"
                      placeholder="Escribe tu mensaje aquí..."
                    />
                    <div className="flex justify-between items-center mt-2">
                      <p className="text-xs text-[#4c669a]">Caracteres: <span className="font-bold text-primary">184</span> / 160 (Equivale a 2 SMS)</p>
                      <p className="text-xs text-[#4c669a]">Idioma: <span className="font-bold">Español (ES)</span></p>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-6 sticky top-24">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">visibility</span>
                  Previsualización
                </h3>
                <div className="flex bg-slate-200 dark:bg-slate-800 p-1 rounded-lg">
                  <button
                    onClick={() => setCanalPreview("whatsapp")}
                    className={`flex-1 px-3 py-1.5 rounded text-xs font-bold transition-all
                      ${canalPreview === "whatsapp"
                        ? "bg-primary text-white shadow-md shadow-primary/20"
                        : "text-slate-600 dark:text-slate-400 hover:text-primary"
                      }`}
                  >
                    WhatsApp
                  </button>
                  <button
                    onClick={() => setCanalPreview("email")}
                    className={`flex-1 px-3 py-1.5 rounded text-xs font-bold transition-all
                      ${canalPreview === "email"
                        ? "bg-primary text-white shadow-md shadow-primary/20"
                        : "text-slate-600 dark:text-slate-400 hover:text-primary"
                      }`}
                  >
                    Email
                  </button>
                </div>
              </div>
              {canalPreview === "email" ? (
                <div className="w-full max-w-[640px] bg-white dark:bg-slate-900 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden">

                  {/* Header Gmail style */}
                  <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
                    <div>
                      <p className="text-sm font-bold text-slate-900 dark:text-white">
                        {data.asunto || "Sin asunto"}
                      </p>
                      <p className="text-xs text-slate-500">
                        CobranzaPro &lt;notificaciones@cobranzapro.com&gt;
                      </p>
                    </div>

                    <span className="text-xs text-slate-400">Hoy</span>
                  </div>

                  {/* Body email */}
                  <div className="p-5 text-sm text-slate-800 dark:text-slate-200 whitespace-pre-wrap leading-relaxed">
                    {renderPreview(data.mensaje)}
                  </div>

                  {/* Footer actions (like Gmail) */}
                  <div className="px-4 py-3 border-t border-slate-200 dark:border-slate-700 flex gap-2">
                    <button className="text-xs px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700">
                      Responder
                    </button>
                    <button className="text-xs px-3 py-1 rounded border border-slate-300 dark:border-slate-600">
                      Reenviar
                    </button>
                  </div>
                </div>
              ) : (
                /* WhatsApp preview (tu actual) */
                <div className="flex justify-center items-center bg-slate-100 dark:bg-slate-800/50 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-700">
                  <div className="phone-mockup h-[350px] w-[640px] shadow-2xl rounded-2xl overflow-hidden scale-95 origin-top lg:scale-100 pb-16">
                    <div className="phone-notch"></div>
                    <div className="bg-[#075e54] text-white p-4 pt-8 flex items-center gap-3">
                      <span className="material-symbols-outlined">arrow_back</span>
                      <div className="size-8 bg-slate-300 rounded-full" data-alt="Small placeholder avatar"></div>
                      <div>
                        <p className="text-sm font-bold">CobranzaPro Oficial</p>
                        <p className="text-[10px] opacity-80">En línea</p>
                      </div>
                    </div>
                    <div className="h-full bg-[#e5ddd5] p-4 flex flex-col gap-4 overflow-y-auto" style={{
                      backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDSz0ZtE9YG-lStz4TFokFhn5Qvh68AkLCVijptgdxlD4YSfHRFM_AgdBbMsvn2fsDwAz-5YuDP9btEd80S-hmmsgDYCl7u62cPew6pFCMtDDQYJVdQJSMBNHUOnnma53fnvJd-VVMtTelSOtj-BFJkWMNRSgEp1bSwynrjzR6hEcxn-I86tIZQp7HavuYGWnboZVwR5S5u0010w1Wc1gN7aHpeW7n_y-zCwNlFY3mknGQXB7KUDLFnLVj9URHY0eT5_7OwuauAvq1D")',
                      backgroundSize: 'cover'
                    }}>
                      <div className="self-center bg-white/60 text-[10px] px-2 py-1 rounded shadow-sm mb-2 uppercase font-bold text-slate-600">Hoy</div>
                      <div className="bg-white self-start p-3 rounded-lg rounded-tl-none shadow-sm max-w-[85%] relative">
                        <p className="text-xs text-slate-800 leading-snug break-words whitespace-pre-wrap">
                          {renderPreview(data.mensaje)}
                        </p>
                        <div className="flex justify-end items-center gap-1 mt-1">
                          <span className="text-[9px] text-slate-500">10:45 AM</span>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 w-full bg-slate-100 p-3 flex items-center gap-2">
                      <div className="bg-white rounded-full flex-1 h-8"></div>
                      <div className="size-8 bg-[#075e54] rounded-full flex items-center justify-center text-white">
                        <span className="material-symbols-outlined text-sm">mic</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="bg-blue-50 dark:bg-primary/10 border border-blue-200 dark:border-primary/20 p-4 rounded-lg">
                <div className="flex gap-3">
                  <span className="material-symbols-outlined text-primary">info</span>
                  <div>
                    <p className="text-sm font-bold text-blue-900 dark:text-blue-300">Modo de Vista Previa</p>
                    <p className="text-xs text-blue-800 dark:text-blue-400 mt-1">Los datos que ves son placeholders. Al enviar el mensaje real, se reemplazarán por los datos de cada cliente en tu base de datos.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
        )}
      </main>
    </div>
  );
}
