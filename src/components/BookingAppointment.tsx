import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  MessageCircle,
  Sprout,
  AlertCircle,
  Search,
  ShieldCheck,
  CalendarCheck,
} from 'lucide-react';
import { saveBookingAppointment, getRecentAppointments, BookingAppointment as AppointmentType } from '../lib/appointments';
import { BUSINESS_CONFIG, getWhatsAppUrl } from '../config/business';
import { useLanguage } from '../context/LanguageContext';

export const BookingAppointment: React.FC = () => {
  const { lang, t } = useLanguage();

  const [activeTab, setActiveTab] = useState<'book' | 'view'>('book');

  // Form State
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [appointmentType, setAppointmentType] = useState('Brood Lac Allocation & Pre-booking');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('Morning (09:00 AM - 12:00 PM)');
  const [cropSeason, setCropSeason] = useState('Kusmi Aghani Crop (June - July Inoculation)');
  const [hostTree, setHostTree] = useState('Flemingia semialata');
  const [estimatedQuantity, setEstimatedQuantity] = useState('');
  const [notes, setNotes] = useState('');

  // Submission Status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookedAppointment, setBookedAppointment] = useState<AppointmentType | null>(null);

  // Search/Lookup State
  const [searchPhone, setSearchPhone] = useState('');
  const [searchedAppointments, setSearchedAppointments] = useState<AppointmentType[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload: AppointmentType = {
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim() || undefined,
      location: location.trim() || undefined,
      appointment_type: appointmentType,
      preferred_date: preferredDate || new Date().toISOString().split('T')[0],
      preferred_time: preferredTime,
      crop_season: cropSeason,
      host_tree: hostTree,
      estimated_quantity: estimatedQuantity.trim() || undefined,
      notes: notes.trim() || undefined,
    };

    try {
      const result = await saveBookingAppointment(payload);
      setBookedAppointment(result.data);
    } catch (err) {
      console.error('Booking error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    try {
      const results = await getRecentAppointments(searchPhone.trim() || undefined);
      setSearchedAppointments(results);
    } catch (err) {
      console.error('Search error:', err);
    } finally {
      setIsSearching(false);
    }
  };

  const generateConfirmationWhatsAppUrl = (appt: AppointmentType) => {
    const text = `Hello Lah Suvidha Kendra, I have scheduled an appointment on your website.

Appointment Details:
- Reference ID: ${appt.id || 'N/A'}
- Name: ${appt.name}
- Phone: ${appt.phone}
- Location: ${appt.location || 'Ranchi / Jharkhand'}
- Purpose: ${appt.appointment_type}
- Preferred Date: ${appt.preferred_date}
- Preferred Time: ${appt.preferred_time}
- Target Crop: ${appt.crop_season || 'General'}
- Quantity/Trees: ${appt.estimated_quantity || 'To be discussed'}

Please confirm my consultation slot with Shri Shakti Dhar Koiri.`;
    return getWhatsAppUrl(text);
  };

  return (
    <section id="booking" className="py-16 sm:py-20 bg-white border-b border-[#E7DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#6E1B24] mb-2">
            <CalendarCheck className="w-4 h-4 text-[#1C3F2B]" />
            <span>Consultation Scheduling & Brood Allocation</span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#2C241E]">
            {t('booking_title', 'Book a Consultation / Brood Reservation')}
          </h2>
          <p className="text-sm sm:text-base text-[#5A4D43] mt-2">
            {t(
              'booking_subtitle',
              'Schedule a personalized appointment with Shri Shakti Dhar Koiri at Lah Suvidha Kendra, Ranchi, for seasonal brood lac orders, farm guidance, or wholesale supply discussions.'
            )}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-[#FAF7F2] rounded-xl border border-[#E7DFD3]">
            <button
              onClick={() => setActiveTab('book')}
              className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'book'
                  ? 'bg-[#6E1B24] text-white shadow-sm'
                  : 'text-[#4A3E37] hover:text-[#2C241E]'
              }`}
            >
              <span>{lang === 'hi' ? 'नया अपॉइंटमेंट बुक करें' : 'Book New Appointment'}</span>
            </button>
            <button
              onClick={() => {
                setActiveTab('view');
                getRecentAppointments().then((res) => setSearchedAppointments(res));
              }}
              className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'view'
                  ? 'bg-[#6E1B24] text-white shadow-sm'
                  : 'text-[#4A3E37] hover:text-[#2C241E]'
              }`}
            >
              <span>{lang === 'hi' ? 'मेरी बुकिंग सूची' : 'My Saved Bookings'}</span>
            </button>
          </div>
        </div>

        {activeTab === 'book' ? (
          <div className="max-w-4xl mx-auto bg-[#FAF7F2] rounded-2xl border border-[#E7DFD3] p-6 sm:p-10 shadow-sm">
            {bookedAppointment ? (
              /* Success Confirmation Card */
              <div className="bg-white rounded-xl p-6 sm:p-8 border border-emerald-300 shadow-md text-center space-y-5 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    Appointment Reference Created
                  </span>
                  <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#2C241E] mt-3">
                    {t('booking_success_title', 'Appointment Scheduled Successfully!')}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5A4D43] mt-2 max-w-lg mx-auto">
                    {t(
                      'booking_success_desc',
                      'Your consultation booking has been created with a verified reference ID. Please click below to confirm your slot directly on WhatsApp with Shri Shakti Dhar Koiri.'
                    )}
                  </p>
                </div>

                {/* Booking summary box */}
                <div className="bg-[#FAF7F2] p-5 rounded-xl border border-[#E7DFD3] text-left text-xs sm:text-sm space-y-2 max-w-lg mx-auto">
                  <div className="flex justify-between border-b border-[#EAE2D5] pb-2">
                    <span className="text-[#7A6A5D]">Reference ID:</span>
                    <strong className="font-mono text-[#6E1B24]">{bookedAppointment.id}</strong>
                  </div>
                  <div className="flex justify-between border-b border-[#EAE2D5] pb-2">
                    <span className="text-[#7A6A5D]">Name:</span>
                    <strong className="text-[#2C241E]">{bookedAppointment.name}</strong>
                  </div>
                  <div className="flex justify-between border-b border-[#EAE2D5] pb-2">
                    <span className="text-[#7A6A5D]">Phone:</span>
                    <strong className="text-[#2C241E]">{bookedAppointment.phone}</strong>
                  </div>
                  <div className="flex justify-between border-b border-[#EAE2D5] pb-2">
                    <span className="text-[#7A6A5D]">Type:</span>
                    <strong className="text-[#6E1B24]">{bookedAppointment.appointment_type}</strong>
                  </div>
                  <div className="flex justify-between border-b border-[#EAE2D5] pb-2">
                    <span className="text-[#7A6A5D]">Preferred Date & Slot:</span>
                    <strong className="text-[#2C241E]">
                      {bookedAppointment.preferred_date} · {bookedAppointment.preferred_time}
                    </strong>
                  </div>
                  {bookedAppointment.crop_season && (
                    <div className="flex justify-between border-b border-[#EAE2D5] pb-2">
                      <span className="text-[#7A6A5D]">Target Season:</span>
                      <strong className="text-[#1C3F2B]">{bookedAppointment.crop_season}</strong>
                    </div>
                  )}
                  <div className="flex justify-between pt-1">
                    <span className="text-[#7A6A5D]">Status:</span>
                    <span className="font-semibold text-amber-700 bg-amber-100 px-2 py-0.5 rounded text-xs">
                      Confirmed Request (Pending Meeting)
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={generateConfirmationWhatsAppUrl(bookedAppointment)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-3.5 rounded-lg text-sm font-semibold shadow-md transition-all active:scale-95"
                  >
                    <MessageCircle className="w-5 h-5 fill-current" />
                    <span>Confirm via WhatsApp with Shri Shakti Dhar Koiri</span>
                  </a>

                  <button
                    onClick={() => {
                      setBookedAppointment(null);
                      setName('');
                      setPhone('');
                      setNotes('');
                    }}
                    className="px-5 py-3 border border-[#D5C9B8] rounded-lg text-xs font-semibold text-[#4A3E37] hover:bg-[#FAF7F2] cursor-pointer"
                  >
                    Schedule Another Consultation
                  </button>
                </div>
              </div>
            ) : (
              /* Booking Form */
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-[#E7DFD3]">
                  <div>
                    <h3 className="font-serif-title text-xl font-bold text-[#2C241E]">
                      {lang === 'hi' ? 'अपॉइंटमेंट विवरण दर्ज करें' : 'Appointment & Reservation Details'}
                    </h3>
                    <p className="text-xs text-[#7A6A5D] mt-0.5">
                      Schedule your consultation with Shri Shakti Dhar Koiri at Lah Suvidha Kendra.
                    </p>
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 text-xs text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Direct Guidance</span>
                  </div>
                </div>

                {/* Personal Information */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#2C241E] uppercase mb-1">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Kumar"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full pl-9 pr-3.5 py-2.5 bg-white border border-[#DDD3C5] rounded-lg text-sm text-[#2C241E] focus:outline-none focus:ring-2 focus:ring-[#6E1B24]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#2C241E] uppercase mb-1">
                      Mobile / WhatsApp Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full pl-9 pr-3.5 py-2.5 bg-white border border-[#DDD3C5] rounded-lg text-sm text-[#2C241E] focus:outline-none focus:ring-2 focus:ring-[#6E1B24]"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#2C241E] uppercase mb-1">
                      Location / Village / District
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="e.g. Ranchi, Khunti, Gumla, Purulia"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full pl-9 pr-3.5 py-2.5 bg-white border border-[#DDD3C5] rounded-lg text-sm text-[#2C241E] focus:outline-none focus:ring-2 focus:ring-[#6E1B24]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#2C241E] uppercase mb-1">
                      Email Address (Optional)
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-9 pr-3.5 py-2.5 bg-white border border-[#DDD3C5] rounded-lg text-sm text-[#2C241E] focus:outline-none focus:ring-2 focus:ring-[#6E1B24]"
                      />
                    </div>
                  </div>
                </div>

                {/* Consultation & Purpose */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#2C241E] uppercase mb-1">
                      Appointment Purpose *
                    </label>
                    <select
                      value={appointmentType}
                      onChange={(e) => setAppointmentType(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#DDD3C5] rounded-lg text-sm text-[#2C241E] focus:outline-none focus:ring-2 focus:ring-[#6E1B24]"
                    >
                      <option value="Brood Lac Allocation & Pre-booking">
                        Brood Lac Allocation & Pre-booking (बीहन बुकिंग)
                      </option>
                      <option value="Lac Cultivation Guidance & Training">
                        Lac Cultivation Guidance & Advice (खेती परामर्श)
                      </option>
                      <option value="Host Tree Sapling Purchase (Semialta/Kusum/Ber)">
                        Host Tree Saplings Purchase (पौधशाला पौध)
                      </option>
                      <option value="Bulk Lac Products (Raw Lac / Resin / Gum)">
                        Bulk Lac Products Trade (थोक लाह उत्पाद)
                      </option>
                      <option value="Cutting Equipment & Net Supplies">
                        Cutting Equipment & Synthetic Net (औजार व जाली)
                      </option>
                      <option value="Authorized Pesticides/Insecticides Consultation">
                        Crop Protection Inputs Inquiry (कीटनाशक परामर्श)
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#2C241E] uppercase mb-1">
                      Target Lac Crop Season
                    </label>
                    <select
                      value={cropSeason}
                      onChange={(e) => setCropSeason(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#DDD3C5] rounded-lg text-sm text-[#2C241E] focus:outline-none focus:ring-2 focus:ring-[#6E1B24]"
                    >
                      <option value="Kusmi Aghani Crop (June - July Inoculation)">
                        Kusmi Aghani (June-July Inoculation)
                      </option>
                      <option value="Kusmi Jethwi Crop (Jan - Feb Inoculation)">
                        Kusmi Jethwi (Jan-Feb Inoculation)
                      </option>
                      <option value="Rangini Katki Crop (June - July Inoculation)">
                        Rangini Katki (June-July Inoculation)
                      </option>
                      <option value="Rangini Baisakhi Crop (Oct - Nov Inoculation)">
                        Rangini Baisakhi (Oct-Nov Inoculation)
                      </option>
                      <option value="General Commercial Supply / Not Season Bound">
                        General Commercial Supply / Not Season Bound
                      </option>
                    </select>
                  </div>
                </div>

                {/* Scheduling Date & Time */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#2C241E] uppercase mb-1">
                      Preferred Date *
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="date"
                        required
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className="w-full pl-9 pr-3.5 py-2 bg-white border border-[#DDD3C5] rounded-lg text-sm text-[#2C241E] focus:outline-none focus:ring-2 focus:ring-[#6E1B24]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#2C241E] uppercase mb-1">
                      Preferred Time Slot *
                    </label>
                    <div className="relative">
                      <Clock className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <select
                        value={preferredTime}
                        onChange={(e) => setPreferredTime(e.target.value)}
                        className="w-full pl-9 pr-3.5 py-2 bg-white border border-[#DDD3C5] rounded-lg text-sm text-[#2C241E] focus:outline-none focus:ring-2 focus:ring-[#6E1B24]"
                      >
                        <option value="Morning (09:00 AM - 12:00 PM)">Morning (09:00 AM - 12:00 PM)</option>
                        <option value="Afternoon (12:00 PM - 03:00 PM)">Afternoon (12:00 PM - 03:00 PM)</option>
                        <option value="Evening (03:00 PM - 06:00 PM)">Evening (03:00 PM - 06:00 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#2C241E] uppercase mb-1">
                      Est. Quantity / Trees
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 50 kg / 20 Kusum trees"
                      value={estimatedQuantity}
                      onChange={(e) => setEstimatedQuantity(e.target.value)}
                      className="w-full px-3.5 py-2 bg-white border border-[#DDD3C5] rounded-lg text-sm text-[#2C241E] focus:outline-none focus:ring-2 focus:ring-[#6E1B24]"
                    />
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="block text-xs font-bold text-[#2C241E] uppercase mb-1">
                    Specific Requirements / Questions for Shri Shakti Dhar Koiri
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Provide details about your farm location, current tree conditions, or required lot delivery timeline..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#DDD3C5] rounded-lg text-sm text-[#2C241E] focus:outline-none focus:ring-2 focus:ring-[#6E1B24]"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#6E1B24] hover:bg-[#58141C] text-white px-8 py-3.5 rounded-lg text-sm font-semibold shadow-md transition-all active:scale-95 cursor-pointer disabled:opacity-50"
                  >
                    <CalendarCheck className="w-4 h-4" />
                    <span>
                      {isSubmitting
                        ? t('booking_saving', 'Confirming Appointment...')
                        : t('booking_submit', 'Confirm & Schedule Appointment')}
                    </span>
                  </button>

                  <div className="text-xs text-[#7A6A5D] text-center sm:text-right">
                    Direct assistance: <strong>{BUSINESS_CONFIG.displayWhatsapp}</strong> (Ranchi, Jharkhand)
                  </div>
                </div>
              </form>
            )}
          </div>
        ) : (
          /* View Bookings Tab */
          <div className="max-w-4xl mx-auto bg-[#FAF7F2] rounded-2xl border border-[#E7DFD3] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-serif-title text-xl font-bold text-[#2C241E]">
                  Your Recent Consultation Requests
                </h3>
                <p className="text-xs text-[#7A6A5D] mt-0.5">
                  Saved bookings and appointments with Lah Suvidha Kendra.
                </p>
              </div>

              {/* Phone search */}
              <form onSubmit={handleSearch} className="flex gap-2">
                <input
                  type="tel"
                  placeholder="Filter by phone..."
                  value={searchPhone}
                  onChange={(e) => setSearchPhone(e.target.value)}
                  className="px-3 py-1.5 bg-white border border-[#DDD3C5] rounded-lg text-xs sm:text-sm text-[#2C241E] focus:outline-none focus:ring-2 focus:ring-[#6E1B24]"
                />
                <button
                  type="submit"
                  disabled={isSearching}
                  className="px-3.5 py-1.5 bg-[#6E1B24] text-white rounded-lg text-xs font-semibold hover:bg-[#58141C] cursor-pointer"
                >
                  {isSearching ? 'Searching...' : 'Search'}
                </button>
              </form>
            </div>

            {/* List of Appointments */}
            {searchedAppointments.length > 0 ? (
              <div className="space-y-3">
                {searchedAppointments.map((appt, idx) => (
                  <div
                    key={appt.id || idx}
                    className="p-4 sm:p-5 rounded-xl bg-white border border-[#E7DFD3] flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-[#2C241E]">{appt.name}</span>
                        <span className="text-[11px] font-mono bg-[#FAF7F2] px-2 py-0.5 rounded text-stone-500 border border-[#EAE2D5]">
                          {appt.id}
                        </span>
                        <span className="text-[10px] font-semibold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
                          Scheduled
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-[#6E1B24]">
                        {appt.appointment_type}
                      </p>
                      <p className="text-xs text-[#7A6A5D]">
                        Scheduled: <strong>{appt.preferred_date}</strong> ({appt.preferred_time}) · Phone: {appt.phone}
                        {appt.location && ` · ${appt.location}`}
                      </p>
                    </div>

                    <a
                      href={generateConfirmationWhatsAppUrl(appt)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#20ba59] text-white px-3.5 py-2 rounded-lg text-xs font-semibold shadow-xs shrink-0"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-current" />
                      <span>Follow-up on WhatsApp</span>
                    </a>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center bg-white rounded-xl border border-[#E7DFD3] text-sm text-[#7A6A5D]">
                No recent bookings found. Use the booking tab above to schedule a consultation with Lah Suvidha Kendra.
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
