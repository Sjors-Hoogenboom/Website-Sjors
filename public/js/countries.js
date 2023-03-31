document.addEventListener('DOMContentLoaded', function() {

const countries = [
    { name: 'Afghanistan', code: 'AF' },
    { name: 'Aland Islands', code: 'AX', type: 'island' },
    { name: 'Albania', code: 'AL' },
    { name: 'Algeria', code: 'DZ' },
    { name: 'American Samoa', code: 'AS', type: 'island' },
    { name: 'Andorra', code: 'AD' },
    { name: 'Angola', code: 'AO' },
    { name: 'Anguilla', code: 'AI', type: 'island' },
    { name: 'Antarctica', code: 'AQ', type: 'unreachable' },
    { name: 'Antigua and Barbuda', code: 'AG', type: 'island' },
    { name: 'Argentina', code: 'AR' },
    { name: 'Armenia', code: 'AM' },
    { name: 'Aruba', code: 'AW', type: 'island' },
    { name: 'Australia', code: 'AU' },
    { name: 'Austria', code: 'AT' },
    { name: 'Azerbaijan', code: 'AZ' },
    { name: 'Bahamas', code: 'BS', type: 'island' },
    { name: 'Bahrain', code: 'BH' },
    { name: 'Bangladesh', code: 'BD' },
    { name: 'Barbados', code: 'BB', type: 'island' },
    { name: 'Belarus', code: 'BY' },
    { name: 'Belgium', code: 'BE' },
    { name: 'Belize', code: 'BZ' },
    { name: 'Benin', code: 'BJ' },
    { name: 'Bermuda', code: 'BM', type: 'island' },
    { name: 'Bhutan', code: 'BT' },
    { name: 'Bolivia', code: 'BO' },
    { name: 'Bonaire, Sint Eustatius and Saba', code: 'BQ', type: 'island' },
    { name: 'Bosnia and Herzegovina', code: 'BA' },
    { name: 'Botswana', code: 'BW' },
    { name: 'Bouvet Island', code: 'BV', type: 'island' },
    { name: 'Brazil', code: 'BR' },
    { name: 'British Indian Ocean Territory', code: 'IO', type: 'island' },
    { name: 'Brunei Darussalam', code: 'BN' },
    { name: 'Bulgaria', code: 'BG' },
    { name: 'Burkina Faso', code: 'BF' },
    { name: 'Burundi', code: 'BI' },
    { name: 'Cambodia', code: 'KH' },
    { name: 'Cameroon', code: 'CM' },
    { name: 'Canada', code: 'CA' },
    { name: 'Cape Verde', code: 'CV', type: 'island' },
    { name: 'Cayman Islands', code: 'KY', type: 'island' },
    { name: 'Central African Republic', code: 'CF' },
    { name: 'Chad', code: 'TD' },
    { name: 'Chile', code: 'CL' },
    { name: 'China', code: 'CN' },
    { name: 'Christmas Island', code: 'CX', type: 'island' },
    { name: 'Cocos (Keeling) Islands', code: 'CC', type: 'island' },
    { name: 'Colombia', code: 'CO' },
    { name: 'Comoros', code: 'KM' },
    { name: 'Congo', code: 'CG' },
    { name: 'Congo, Democratic Republic of the Congo', code: 'CD' },
    { name: 'Cook Islands', code: 'CK', type: 'island' },
    { name: 'Costa Rica', code: 'CR' },
    { name: 'Cote D\'Ivoire', code: 'CI' },
    { name: 'Croatia', code: 'HR' },
    { name: 'Cuba', code: 'CU' },
    { name: 'Curacao', code: 'CW', type: 'island' },
    { name: 'Cyprus', code: 'CY' },
    { name: 'Czech Republic', code: 'CZ' },
    { name: 'Denmark', code: 'DK' },
    { name: 'Djibouti', code: 'DJ' },
    { name: 'Dominica', code: 'DM' },
    { name: 'Dominican Republic', code: 'DO' },
    { name: 'Ecuador', code: 'EC' },
    { name: 'Egypt', code: 'EG' },
    { name: 'El Salvador', code: 'SV' },
    { name: 'Equatorial Guinea', code: 'GQ' },
    { name: 'Eritrea', code: 'ER' },
    { name: 'Estonia', code: 'EE' },
    { name: 'Ethiopia', code: 'ET' },
    { name: 'Falkland Islands (Malvinas)', code: 'FK', type: 'island' },
    { name: 'Faroe Islands', code: 'FO', type: 'island' },
    { name: 'Fiji', code: 'FJ', type: 'island' },
    { name: 'Finland', code: 'FI' },
    { name: 'France', code: 'FR' },
    { name: 'French Guiana', code: 'GF' },
    { name: 'French Polynesia', code: 'PF', type: 'island' },
    { name: 'French Southern Territories', code: 'TF', type: 'island' },
    { name: 'Gabon', code: 'GA' },
    { name: 'Gambia', code: 'GM' },
    { name: 'Georgia', code: 'GE' },
    { name: 'Germany', code: 'DE' },
    { name: 'Ghana', code: 'GH' },
    { name: 'Gibraltar', code: 'GI' },
    { name: 'Greece', code: 'GR' },
    { name: 'Greenland', code: 'GL', type: 'unreachable' },
    { name: 'Grenada', code: 'GD', type: 'island' },
    { name: 'Guadeloupe', code: 'GP', type: 'island' },
    { name: 'Guam', code: 'GU', type: 'island' },
    { name: 'Guatemala', code: 'GT' },
    { name: 'Guernsey', code: 'GG', type: 'island' },
    { name: 'Guinea', code: 'GN' },
    { name: 'Guinea-Bissau', code: 'GW' },
    { name: 'Guyana', code: 'GY' },
    { name: 'Haiti', code: 'HT' },
    { name: 'Heard Island and Mcdonald Islands', code: 'HM', type: 'island' },
    { name: 'Holy See (Vatican City State)', code: 'VA' },
    { name: 'Honduras', code: 'HN' },
    { name: 'Hong Kong', code: 'HK' },
    { name: 'Hungary', code: 'HU' },
    { name: 'Iceland', code: 'IS' },
    { name: 'India', code: 'IN' },
    { name: 'Indonesia', code: 'ID' },
    { name: 'Iran, Islamic Republic of', code: 'IR' },
    { name: 'Iraq', code: 'IQ' },
    { name: 'Ireland', code: 'IE' },
    { name: 'Isle of Man', code: 'IM', type: 'island' },
    { name: 'Israel', code: 'IL' },
    { name: 'Italy', code: 'IT' },
    { name: 'Jamaica', code: 'JM' },
    { name: 'Japan', code: 'JP' },
    { name: 'Jersey', code: 'JE' },
    { name: 'Jordan', code: 'JO' },
    { name: 'Kazakhstan', code: 'KZ' },
    { name: 'Kenya', code: 'KE' },
    { name: 'Kiribati', code: 'KI' },
    { name: 'Korea, Democratic People\'s Republic of', code: 'KP' },
    { name: 'Korea, Republic of', code: 'KR' },
    { name: 'Kosovo', code: 'XK' },
    { name: 'Kuwait', code: 'KW' },
    { name: 'Kyrgyzstan', code: 'KG' },
    { name: 'Lao People\'s Democratic Republic', code: 'LA' },
    { name: 'Latvia', code: 'LV' },
    { name: 'Lebanon', code: 'LB' },
    { name: 'Lesotho', code: 'LS' },
    { name: 'Liberia', code: 'LR' },
    { name: 'Libyan Arab Jamahiriya', code: 'LY' },
    { name: 'Liechtenstein', code: 'LI' },
    { name: 'Lithuania', code: 'LT' },
    { name: 'Luxembourg', code: 'LU' },
    { name: 'Macao', code: 'MO' },
    { name: 'Macedonia, the Former Yugoslav Republic of', code: 'MK' },
    { name: 'Madagascar', code: 'MG' },
    { name: 'Malawi', code: 'MW' },
    { name: 'Malaysia', code: 'MY' },
    { name: 'Maldives', code: 'MV' },
    { name: 'Mali', code: 'ML' },
    { name: 'Malta', code: 'MT' },
    { name: 'Marshall Islands', code: 'MH' },
    { name: 'Martinique', code: 'MQ' },
    { name: 'Mauritania', code: 'MR' },
    { name: 'Mauritius', code: 'MU', type: 'island' },
    { name: 'Mayotte', code: 'YT', type: 'island' },
    { name: 'Mexico', code: 'MX' },
    { name: 'Micronesia, Federated States of', code: 'FM', type: 'island' },
    { name: 'Moldova, Republic of', code: 'MD' },
    { name: 'Monaco', code: 'MC' },
    { name: 'Mongolia', code: 'MN' },
    { name: 'Montenegro', code: 'ME' },
    { name: 'Montserrat', code: 'MS', type: 'island' },
    { name: 'Morocco', code: 'MA' },
    { name: 'Mozambique', code: 'MZ' },
    { name: 'Myanmar', code: 'MM' },
    { name: 'Namibia', code: 'NA' },
    { name: 'Nauru', code: 'NR', type: 'island' },
    { name: 'Nepal', code: 'NP' },
    { name: 'Netherlands', code: 'NL' },
    { name: 'Netherlands Antilles', code: 'AN', type: 'island' },
    { name: 'New Caledonia', code: 'NC', type: 'island' },
    { name: 'New Zealand', code: 'NZ' },
    { name: 'Nicaragua', code: 'NI' },
    { name: 'Niger', code: 'NE' },
    { name: 'Nigeria', code: 'NG' },
    { name: 'Niue', code: 'NU', type: 'island' },
    { name: 'Norfolk Island', code: 'NF', type: 'island' },
    { name: 'Northern Mariana Islands', code: 'MP', type: 'island' },
    { name: 'Norway', code: 'NO' },
    { name: 'Oman', code: 'OM' },
    { name: 'Pakistan', code: 'PK' },
    { name: 'Palau', code: 'PW', type: 'island' },
    { name: 'Palestinian Territory, Occupied', code: 'PS', type: 'unreachable' },
    { name: 'Panama', code: 'PA' },
    { name: 'Papua New Guinea', code: 'PG' },
    { name: 'Paraguay', code: 'PY' },
    { name: 'Peru', code: 'PE' },
    { name: 'Philippines', code: 'PH' },
    { name: 'Pitcairn', code: 'PN', type: 'island' },
    { name: 'Poland', code: 'PL' },
    { name: 'Portugal', code: 'PT' },
    { name: 'Puerto Rico', code: 'PR' },
    { name: 'Qatar', code: 'QA' },
    { name: 'Reunion', code: 'RE', type: 'island' },
    { name: 'Romania', code: 'RO' },
    { name: 'Russian Federation', code: 'RU' },
    { name: 'Rwanda', code: 'RW' },
    { name: 'Saint Barthelemy', code: 'BL', type: 'island' },
    { name: 'Saint Helena', code: 'SH', type: 'island' },
    { name: 'Saint Kitts and Nevis', code: 'KN', type: 'island' },
    { name: 'Saint Lucia', code: 'LC', type: 'island' },
    { name: 'Saint Martin', code: 'MF', type: 'island' },
    { name: 'Saint Pierre and Miquelon', code: 'PM', type: 'island' },
    { name: 'Saint Vincent and the Grenadines', code: 'VC', type: 'island' },
    { name: 'Samoa', code: 'WS', type: 'island' },
    { name: 'San Marino', code: 'SM' },
    { name: 'Sao Tome and Principe', code: 'ST', type: 'island' },
    { name: 'Saudi Arabia', code: 'SA' },
    { name: 'Senegal', code: 'SN' },
    { name: 'Serbia', code: 'RS' },
    { name: 'Serbia and Montenegro', code: 'CS' },
    { name: 'Seychelles', code: 'SC', type: 'island' },
    { name: 'Sierra Leone', code: 'SL' },
    { name: 'Singapore', code: 'SG' },
    { name: 'Sint Maarten', code: 'SX', type: 'island' },
    { name: 'Slovakia', code: 'SK' },
    { name: 'Slovenia', code: 'SI' },
    { name: 'Solomon Islands', code: 'SB', type: 'island' },
    { name: 'Sudan', code: 'SD' },
    { name: 'Suriname', code: 'SR' },
    { name: 'Svalbard and Jan Mayen', code: 'SJ', type: 'island' },
    { name: 'Swaziland', code: 'SZ' },
    { name: 'Sweden', code: 'SE' },
    { name: 'Switzerland', code: 'CH' },
    { name: 'Syrian Arab Republic', code: 'SY' },
    { name: 'Taiwan, Province of China', code: 'TW' },
    { name: 'Tajikistan', code: 'TJ' },
    { name: 'Tanzania, United Republic of', code: 'TZ' },
    { name: 'Thailand', code: 'TH' },
    { name: 'Timor-Leste', code: 'TL' },
    { name: 'Togo', code: 'TG' },
    { name: 'Tokelau', code: 'TK', type: 'island' },
    { name: 'Tonga', code: 'TO' },
    { name: 'Trinidad and Tobago', code: 'TT', type: 'island' },
    { name: 'Tunisia', code: 'TN' },
    { name: 'Turkey', code: 'TR' },
    { name: 'Turkmenistan', code: 'TM' },
    { name: 'Turks and Caicos Islands', code: 'TC', type: 'island' },
    { name: 'Tuvalu', code: 'TV', type: 'island' },
    { name: 'Uganda', code: 'UG' },
    { name: 'Ukraine', code: 'UA' },
    { name: 'United Arab Emirates', code: 'AE' },
    { name: 'United Kingdom', code: 'GB' },
    { name: 'United States', code: 'US' },
    { name: 'United States Minor Outlying Islands', code: 'UM', type: 'island' },
    { name: 'Uruguay', code: 'UY' },
    { name: 'Uzbekistan', code: 'UZ' },
    { name: 'Vanuatu', code: 'VU', type: 'island' },
    { name: 'Venezuela, Bolivarian Republic of', code: 'VE' },
    { name: 'Vietnam', code: 'VN' },
    { name: 'Virgin Islands, British', code: 'VG', type: 'island' },
    { name: 'Virgin Islands, U.S.', code: 'VI', type: 'island' },
    { name: 'Wallis and Futuna', code: 'WF', type: 'island' },
    { name: 'Western Sahara', code: 'EH', type: 'unreachable' },
    { name: 'Yemen', code: 'YE' },
    { name: 'Zambia', code: 'ZM' },
    { name: 'Zimbabwe', code: 'ZW' }
]

const selectElement = document.getElementById('country');

countries.forEach(country => {
    const option = document.createElement('option');
    option.value = country.code;
    option.text = country.name;
    
    if (country.type) {
        option.setAttribute('type', country.type);
    }
    selectElement.appendChild(option);
  });
});

function alertForm() {
    const selectElement = document.getElementById('country');
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    const countryStatus = selectedOption.getAttribute('type');
    
    if (countryStatus === 'unreachable') {
      alert('This country is not reachable.');
    } else if (countryStatus === 'island') {
      alert('this country/ territory is a small island, therefore we cannot ship it to you');
    } else {
      alert('Order received, we will send the order to' + selectedOption.text + 'soon');
    }
  }